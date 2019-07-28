var app = getApp();
var nickname = wx.getStorageSync("nickname");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    secretKey : '',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    genders: ['男', '女'],
    genderIndex: nickname?wx.getStorageSync(nickname + "genderIndex"):0,
    proteinuria: ['小于1g/24h', '大于1g/24h'],
   // proteinuriaIndex: 0, //蛋白尿
    kidney: ['未透析', '腹膜透析', '血液透析', '肾移植'],
    kidneyIndex: app.globalData.userInfo ?wx.getStorageSync(nickname + "kidneyIndex"):0,
  //  ifDiabetes: ['是', '否'],
   // ifDiabetesIndex: 0, //是否糖尿病
    age: nickname ? wx.getStorageSync(nickname + "age") : 0,
    height: nickname ? wx.getStorageSync(nickname + "height") : 0 ,
    weight: nickname ? wx.getStorageSync(nickname + "weight") : 0,
    isBlack: nickname ?wx.getStorageSync(nickname + "isBlack") : 0,
    serumCreatinine: nickname ?wx.getStorageSync(nickname + "serumCreatinine") : 0, //血肌酐
    bloodAlbumin: nickname ? wx.getStorageSync(nickname + "bloodAlbumin") : 0, //血白蛋白
     //page2 data
    weightStandard: 0,
    nutritionAccess: 0,
    GFR: 0,
    page1:true,
    CKD:0,
    dailyHeat: 0,
    dailyProteinAmount:0,
    qualityProtein: 0
  },
  bindGetUserInfo: function (e) {
   // console.log(e.detail.userInfo);
    //app.globalData.userInfo = e.detail.userInfo;
  },
  onLoad: function () {
    var localKey;
    localKey = wx.getStorageSync("localKey");
    if (localKey == "666") {
      console.log(localKey);
      this.setData({ page1: 0 })
    } else {
      this.setData({ page1: -1 })
    }
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              app.globalData.userInfo = res.userInfo;
              wx.setStorageSync("nickname", res.userInfo.nickName);
              nickname = res.userInfo.nickName;
            }
          })

        }
      }
    })
    this.wxValidate = app.wxValidate({
      age: {
        required: true,
        minlength: 1,
        maxlength: 3,
      },
      weight: {
        required: true,
        minlength: 1,
        maxlength: 3,
      },
      height: {
        required: true,
        minlength: 1,
        maxlength: 3,
      },
      serumCreatinine: {
        required: true,
        minlength: 1,
        maxlength: 100,
      },
      bloodAlbumin: {
        required: true,
        minlength: 1,
        maxlength: 100,
      }
      
    }, {
      age: {
        required: '请填写您的年龄',
      },
      weight: {
        required: '请填写您的体重',
      },
      height: {
        required: '请输入您的身高',
      },
      serumCreatinine: {
        required: '请输入您的血肌酐情况',
      },
      bloodAlbumin: {
        required: '请输入您的血红蛋白情况',
      }
    })
    //this.setData({ page1: -1 });
  },
  /*密钥验证 */
  getKey: function(e) {
    if (this.data.secretKey == "666") {
      wx.setStorageSync("localKey", this.data.secretKey);
      this.setData({ page1 : 0 });
    }
  },
  getKeyInput: function(e) {
    this.setData({
      secretKey: e.detail.value
    });
  },
  /*表单验证 */
  getPatientInfo: function(e) {
    if (!this.wxValidate.checkForm(e)) {
      const error = this.wxValidate.errorList[0]
      wx.showToast({
        title: `${error.msg} `,
        image: '/pages/image/warn_light.png',
        duration: 2000
      })
      return false
    }
    app.globalData.userHealth = {
      genderIndex: this.data.genderIndex,
      weight: this.data.weight,
      height: this.data.height,
      isBlack: this.data.isBlack,
      kidneyIndex: this.data.kidneyIndex,
      serumCreatinine: this.data.serumCreatinine,
      bloodAlbumin: this.data.bloodAlbumin,
      age: this.data.age,
    }
    wx.setStorageSync(nickname+"genderIndex", this.data.genderIndex);
    wx.setStorageSync(nickname +"weight", this.data.weight);
    wx.setStorageSync(nickname +"height", this.data.height);
    wx.setStorageSync(nickname +"isBlack", this.data.isBlack);
  //  wx.setStorageSync(nickname +"proteinuriaIndex", this.data.proteinuriaIndex); //蛋白尿
    wx.setStorageSync(nickname +"kidneyIndex", this.data.kidneyIndex); //肾脏替代情况
  //  wx.setStorageSync(nickname +"ifDiabetesIndex", this.data.ifDiabetesIndex); //是否糖尿病
    wx.setStorageSync(nickname +"serumCreatinine", this.data.serumCreatinine); //血肌酐
    wx.setStorageSync(nickname+"bloodAlbumin", this.data.bloodAlbumin); //血白蛋白
    wx.setStorageSync(nickname +"age", this.data.age);
 
/**page2 */

    wx.pageScrollTo({
      scrollTop: 0
    })
    
    /**计算标准体重 */
    var weightSta = this.data.height - 105;
    
    /**计算每日热量和蛋白质量 */
    var dailyHeat;
    var dailyProteinAmount = weightSta * 0.7;
    if (this.data.kidneyIndex > 0) dailyProteinAmount = weightSta * 1.2;
    if (this.data.kidneyIndex > 2) dailyProteinAmount = weightSta * 1;
    console.log(this.data.kidneyIndex);

    var qualityProtein = dailyProteinAmount * 0.6;
    dailyHeat = weightSta * 30;
    this.setData({
      weightStandard: weightSta,
      dailyHeat: dailyHeat,
      dailyProteinAmount: parseInt(dailyProteinAmount),
      qualityProtein: parseInt(qualityProtein)
    });

    /**计算营养评估指数 */
    var GNRI = 0;
    /*若年龄>65，使用GNRI进行营养评估，92<=GNRI<=98为无营养风险  GNRI = =[14.89×白蛋白(g / L)] + [41.7×(实际体重 / 标准体重)]. 
    65岁以上：GNRI>98是无营养不良风险  ；
    92 <= GNRI <= 98为轻度营养不良风险；
    82 <= GNRI < 92是中度营养风险，建议及时就医；
    GNRI < 82是重度营养不良风险，建议及时就医*/

    if (this.data.age >= 65) {
      GNRI = (14.89 * this.data.bloodAlbumin) + (41.7 * (this.data.weight / weightSta));
      if (GNRI > 98) {
        this.setData({
          nutritionAccess: '无营养不良风险'
        })
      } else if(GNRI>=92 && GNRI<=98){
        this.setData({
          nutritionAccess: '轻度营养不良风险'
        })
      }
      else if (GNRI >= 82 && GNRI < 92) {
        this.setData({
          nutritionAccess: '中度营养不良风险，建议及时就医'
        })
      }
      else if (GNRI < 82) {
        this.setData({
          nutritionAccess: '重度营养不良风险，建议及时就医'
        })
      }
    } else {
      if (this.data.bloodAlbumin <= 38) //若年龄≤60，以血白蛋白<=38g/L为低营养风险
      {
        this.setData({
          nutritionAccess: '有营养不良风险，建议及时就医'
        })
      } else {
        this.setData({
          nutritionAccess: '无营养不良风险'
        })
      }
    }
    /**计算CKD-EPI */
    var GFR;
    var serumCreatinine = this.data.serumCreatinine;
    var age = this.data.age;
    serumCreatinine = serumCreatinine / 88.4;
    var min, max;
    //如果是女性

    if (this.data.genderIndex == "1") {
      min = serumCreatinine / 0.7 < 1 ? serumCreatinine / 0.7 : 1;
      max = serumCreatinine / 0.7 > 1 ? serumCreatinine / 0.7 : 1;
      GFR = 141 * Math.pow(min, -0.329) * Math.pow(max, -1.209) * Math.pow(0.993, age) * 1.018;
      if (this.data.isBlack) {
        GFR = GFR * 1.159;
      }
    }
    //如果是男性
    else {
      min = serumCreatinine / 0.9 < 1 ? serumCreatinine / 0.9 : 1;
      max = serumCreatinine / 0.9 > 1 ? serumCreatinine / 0.9 : 1

      GFR = 141 * Math.pow(min, -0.411) * Math.pow(max, -1.209) * Math.pow(0.993, age);

      if (this.data.isBlack)
        GFR = GFR * 1.159;
    }
    GFR = parseInt(GFR);
    var ckd;
    if(GFR>=90){ ckd = 1; }
    else if(GFR>=60 && GFR<90){
      ckd = 2;
    }
    else if(GFR>=30 && GFR<60){
      ckd = 3;
    }
    else if(GFR>=15 && GFR<30){
      ckd = 4;
    }
    else if(GFR<15){
      ckd = 5;
    }
    this.setData({
      GFR: GFR,
      CKD:ckd
    });
    this.setData({
      page1: 1
    })
  },
  /**end page2 */

  raceChange: function(e) {
    if (this.data.isBlack == true) {
      this.setData({
        isBlack: false
      })
    } else {
      this.setData({
        isBlack: true
      })
    }
  },
  bindGenderPicker: function(e) {
    this.setData({
      genderIndex: e.detail.value
    })
  },
  /*proteinuriaChange: function(e) {
    this.setData({
      proteinuriaIndex: e.detail.value
    })
  },*/
  kidneyChange(e) {
    this.setData({
      kidneyIndex: e.detail.value
    })
  },
 /* ifDiabetesChange(e) {
    this.setData({
      ifDiabetesIndex: e.detail.value
    })
  },*/
  getSerumCreatinine(e) {
    this.setData({
      serumCreatinine: e.detail.value
    })
  },
  getBloodAlbumin(e) {
    this.setData({
      bloodAlbumin: e.detail.value
    })
  },
  getAge(e) {
    this.setData({
      age: e.detail.value
    })
  },
  getHeight(e) {
    this.setData({
      height: e.detail.value
    })
  },
  getWeight(e) {
    this.setData({
      weight: e.detail.value
    })
  },
  /**page2 进行食材选择 */
  foodChoose: function (e) {
    wx.navigateTo({
      url: '../foodChoosedPage1/foodChoosedPage1',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '肾病营养小程序 ',
      desc: '这是一个专门为肾病患者制定食谱的小程序',
      path: '/pages/page1/page1'
    }  
  },
  onShow:function(){
    //this.setData({ page1: -1 });
  }
})
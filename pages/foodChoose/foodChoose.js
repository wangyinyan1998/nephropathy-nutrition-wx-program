var app = getApp();
var nickname = wx.getStorageSync("nickname");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    meaus: [],
    share: 0,
  },
onLoad:function(e){
  this.setData({
    meaus: wx.getStorageSync(nickname + "meaus")
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    this.setData({
      meaus: wx.getStorageSync(nickname + "meaus")
    })
    if (this.data.share == 1) {
      this.setData({ share: 0 });
      return;
    }
    if (this.data.share == 2) {
      this.setData({ share: 1 });
      return;
    }
  },
  makeRecipe:function(e){
    wx.navigateTo({
      url: '../foodChoosedPage1/foodChoosedPage1',
    })
  },
  mealMake: function (e) {
    var id = e.currentTarget.id;
    var meaus =  this.data.meaus;
    var choosedMeal = meaus[meaus.length-1][1];
    var mealCanLook = meaus[meaus.length-1][2];
    if (mealCanLook) {
      for (var i = 0; i < choosedMeal.length; i++) {
        if (choosedMeal[i].id == id) {
          this.setData({
            share: 1
          })
          wx.navigateTo({
            url: '../foodShow/foodShow?meal=' + JSON.stringify(choosedMeal[i]),
          })
          return;
        }
      }
    }
    else if (this.data.share == 1) {
      var meaus = this.data.meaus;
      meaus[meaus.length - 1][2] = true;
      console.log(meaus);
      this.setData({
        meaus: meaus
      })
      wx.setStorageSync(nickname + "meaus", meaus);
      for (var i = 0; i < choosedMeal.length; i++) {
        if (choosedMeal[i].id == id) {
          wx.navigateTo({
            url: '../foodShow/foodShow?meal=' + JSON.stringify(choosedMeal[i]),
          })
          return;
        }
      }
    }
    else if (this.data.share == 0) {
      warn.showWarn("转发后方可查看");
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    this.setData({ share: 2 });
    return {
      title: '肾病营养小程序 ',
      desc: '这是一个专门为肾病患者制定食谱的小程序',
      path: '/pages/page1/page1'
     // path: '/pages/foodChoose/foodChoose'
    }  
  }
})
// pages/foodChoosedPage4/foodChoosedPage4.js
var app = getApp();
var warn = require("../../utils/showWarn.js");
var nickname = wx.getStorageSync("nickname");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choosedMeal:[],
    choosedFood:[],
    totalProteinAmount:0,
    totalqualityProtein:0,
    totalHeat:0,
    share: 0,
    mealCanLook: false
  },
  mealMake: function (e) {
    var id = e.currentTarget.id;
    var choosedMeal = this.data.choosedMeal;
    var mealCanLook = this.data.mealCanLook;
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
      this.setData({
        mealCanLook: true
      })
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
  collectMeau: function (e) {
    var meaus = wx.getStorageSync(nickname + "meaus");
    if (!meaus) {
        meaus = [];
    }
    var todayMeal = [];
    todayMeal.push(this.data.choosedFood);
    todayMeal.push(this.data.choosedMeal);
    todayMeal.push(this.data.mealCanLook);
    meaus.push(todayMeal);
    app.globalData.meaus = meaus;
    wx.setStorageSync(nickname + "meaus", meaus);
    wx.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 1200
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = JSON.parse(options.data);
    this.setData(data);
  },
  onShow:function(){
    if (this.data.share == 1) {
      this.setData({ share: 0 });
      return;
    }
    if (this.data.share == 2) {
      this.setData({ share: 1 });
      return;
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
     // path: '/pages/foodChoosedPage4/foodChoosedPage4'
    }
  }
})
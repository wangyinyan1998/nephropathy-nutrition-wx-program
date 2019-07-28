// pages/collectionShow/collectionShow.js
var app = getApp();
var nickname = wx.getStorageSync("nickname");
var warn = require("../../utils/showWarn.js");
Page({
  data: {
    meaus: [],
    page: 1,
    recipeIndex: 0,
    share: 0
  },
  onLoad: function(options) {
    this.setData({
      page: 1,
      meaus: wx.getStorageSync(nickname + "meaus")
    })
  },
  delMeau: function(e) {
    var meaus = this.data.meaus;
    var length = meaus.length;
    for (var i = 0; i < length; i++) {
      if (i == e.currentTarget.id) {
        var newArray = [];
        for (var k = 0; k < i; k++) {
          newArray[k] = meaus[k];
        }
        for (i = i; i < length - 1; i++) {
          newArray[i] = meaus[i + 1];
        }
        meaus = newArray;
        app.globalData.meaus = meaus;
        wx.setStorageSync(nickname + "meaus", meaus);
        this.setData({
          meaus: meaus
        });
        break;
      }
    }
    this.setData({
      page: 1
    })
  },
  showRecipe: function(e) {
    this.setData({
      page: 2,
      recipeIndex: parseInt(e.currentTarget.id)
    });
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  goToMakeRecipe: function() {
    wx.switchTab({
      url: '../foodChoosedPage1/foodChoosePage1',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    this.setData({
      share: 2
    });
    return {
      title: '肾病营养小程序 ',
      desc: '这是一个专门为肾病患者制定食谱的小程序',
      path: '/pages/page1/page1'
     // path: '/pages/collectionShow/collectionShow'
    }
  },
  onShow: function() {
    if (this.data.share == 1) {
      this.setData({
        share: 0
      });
      return;
    }
    if (this.data.share == 2) {
      this.setData({
        share: 1
      });
      return;
    }
    this.setData({
      page: 1,
      meaus: wx.getStorageSync(nickname + "meaus")
    })
  },
  mealMake: function(e) {
    var id = e.currentTarget.id;
    var choosedMeal = this.data.meaus[this.data.recipeIndex][1];
    var mealCanLook = this.data.meaus[this.data.recipeIndex][2];
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
    } else if (this.data.share == 1) {
      var meaus = this.data.meaus;
      meaus[this.data.recipeIndex][2] = true;
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
    } else if (this.data.share == 0) {
      warn.showWarn("转发后方可查看");
    }
  }
})
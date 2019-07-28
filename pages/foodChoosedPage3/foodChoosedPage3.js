// pages/foodChoosedPage3/foodChoosedPage3.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choosedMeal:[],
    meal:[],
    choosedFood:[],
    totalHeat: [], //每天热量
    totalProteinAmount: [], //每天蛋白量
    totalqualityProtein: [] //每天优质蛋白量
  },

  submitChoosedMeal: function (e) {
    var data = {
      choosedMeal: this.data.choosedMeal,
      mealCanLook: false,
      share: 0,
      choosedFood: this.data.choosedFood,
      totalHeat: this.data.totalHeat, //每天热量
      totalProteinAmount: this.data.totalProteinAmount, //每天蛋白量
      totalqualityProtein: this.data.totalqualityProtein //每天优质蛋白量
    }
   wx.navigateTo({
     url: '../foodChoosedPage4/foodChoosedPage4?data='+JSON.stringify(data),
   })
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  /**page3相关方法 */
  mealChoose: function (e) {
    var values = e.detail.value;
    var choosedMeal = [];
    for (var i = 0; i < values.length; i++) {
      choosedMeal.push(this.data.meal[values[i]]);
    }
    this.setData({ choosedMeal: choosedMeal });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = JSON.parse(options.data);
    this.setData(data);
  },

  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },


  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '肾病营养小程序 ',
      desc: '这是一个专门为肾病患者制定食谱的小程序',
      path: '/pages/page1/page1'
     // path: '/pages/foodChoosedPage3/foodChoosedPage3'
    }
  }
})

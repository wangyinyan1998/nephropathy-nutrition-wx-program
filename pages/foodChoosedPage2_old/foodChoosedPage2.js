// pages/foodChoosedPage2/foodChoosedPage2.js
var app = getApp();
var warn = require("../../utils/showWarn.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choosedCereal: [],
    choosedVeg: [],
    choosedGrease: [],
    choosedFruit: [],
    choosedMilk: [],
    choosedMeatEgg: [],
    choosedNuts: [],
    meal: [],
    choosedFood: [],
    totalProteinAmount: 0,
    totalqualityProtein: 0,
    totalHeat: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var data = JSON.parse(options.data);
    this.setData(data);
  },

  cerealRadioChange: function(e) {
    console.log(e.detail.value)
    var value = e.detail.value;
    var arr = value.split(' ');
    var choosedCereal = this.data.choosedCereal;
    choosedCereal[arr[2]].copyArray[arr[0]] = arr[1];
    this.setData({
      choosedCereal: choosedCereal
    })
  },
  vegRadioChange: function(e) {
    var value = e.detail.value;
    var arr = value.split(' ');
    var choosedData = this.data.choosedVeg;
    choosedData[arr[2]].copyArray[arr[0]] = arr[1];
    this.setData({
      choosedVeg: choosedData
    })
  },
  fruitRadioChange: function(e) {
    var value = e.detail.value;
    var arr = value.split(' ');
    var choosedData = this.data.choosedFruit;
    choosedData[arr[2]].copyArray[arr[0]] = arr[1];
    this.setData({
      choosedFruit: choosedData
    })
  },
  milkRadioChange: function(e) {
    var value = e.detail.value;
    var arr = value.split(' ');
    var choosedData = this.data.choosedMilk;
    choosedData[arr[2]].copyArray[arr[0]] = arr[1];
    this.setData({
      choosedMilk: choosedData
    })
  },
  meatEggRadioChange: function(e) {
    var value = e.detail.value;
    var arr = value.split(' ');
    var choosedData = this.data.choosedMeatEgg;
    choosedData[arr[2]].copyArray[arr[0]] = arr[1];
    this.setData({
      choosedMeatEgg: choosedData
    })
  },
  greaseRadioChange: function(e) {
    var value = e.detail.value;
    var arr = value.split(' ');
    var choosedData = this.data.choosedGrease;
    choosedData[arr[2]].copyArray[arr[0]] = arr[1];
    this.setData({
      choosedGrease: choosedData
    })
  },
  nutsRadioChange: function(e) {
    var value = e.detail.value;
    var arr = value.split(' ');
    var choosedData = this.data.choosedNuts;
    choosedData[arr[2]].copyArray[arr[0]] = arr[1];
    this.setData({
      choosedNuts: choosedData
    })
  },
  submitRecipe: function(e) {
    var namesJS = require("../../utils/datas/name.js");
    var mergeArray = require("../../utils/mergeArray.js");
    var mealJS = require("../../utils/datas/meal.js");
    var meals = mealJS.getMeal();
    var names = namesJS.getName();
    var meal = [];
    var i;
    var j, k;
    var breakfast = 0;
    var lunch = 0;
    var dinner = 0;
    var choosedFood = [
      [],
      [],
      []
    ];
    for (i = 0; i < this.data.choosedCereal.length; i++) {
      breakfast = 0;
      lunch = 0;
      dinner = 0;
      for (k = 0; k < this.data.choosedCereal[i].copies; k++) {
        var s = this.data.choosedCereal[i].copyArray[k];
        if (s == '早') {
          breakfast++;
        } else if (s == "中") {
          lunch++;
        } else if (s == "晚") {
          dinner++;
        } else {
          warn.showWarn("请选择完全！");
          return;
        }
      }
      if (breakfast != 0) {
        var data = this.data.choosedCereal[i];
        data.totalWeight = breakfast * data.weight;
        choosedFood[0].push(data);
      }
      if (lunch != 0) {
        var data = this.data.choosedCereal[i];
        data.totalWeight = lunch * data.weight;
        choosedFood[1].push(data);
      }
      if (dinner != 0) {
        var data = this.data.choosedCereal[i];
        data.totalWeight = dinner * data.weight;
        choosedFood[2].push(data);
      }
      for (j = 0; j < names.length; j++) {
        if (this.data.choosedCereal[i].name.indexOf(names[j].name) >= 0) {
          meal = mergeArray.mergeArray(meal, names[j].meal);
        }
      }


    }
    for (i = 0; i < this.data.choosedFruit.length; i++) {
      breakfast = 0;
      lunch = 0;
      dinner = 0;
      for (k = 0; k < this.data.choosedFruit[i].copies; k++) {
        var s = this.data.choosedFruit[i].copyArray[k];
        if (s == '早') {
          breakfast++;
        } else if (s == "中") {
          lunch++;
        } else if (s == "晚") {
          dinner++;
        } else {
          warn.showWarn("请选择完全！");
          return;
        }
      }
      if (breakfast != 0) {
        var data = this.data.choosedFruit[i];
        data.totalWeight = breakfast * data.weight;
        choosedFood[0].push(data);
      }
      if (lunch != 0) {
        var data = this.data.choosedFruit[i];
        data.totalWeight = lunch * data.weight;
        choosedFood[1].push(data);
      }
      if (dinner != 0) {
        var data = this.data.choosedFruit[i];
        data.totalWeight = dinner * data.weight;
        choosedFood[2].push(data);
      }
      for (j = 0; j < names.length; j++) {
        if (this.data.choosedFruit[i].name.indexOf(names[j].name) >= 0) {
          meal = mergeArray.mergeArray(meal, names[j].meal);
        }
      }

    }
    for (i = 0; i < this.data.choosedVeg.length; i++) {
      breakfast = 0;
      lunch = 0;
      dinner = 0;
      for (k = 0; k < this.data.choosedVeg[i].copies; k++) {
        var s = this.data.choosedVeg[i].copyArray[k];
        if (s == '早') {
          breakfast++;
        } else if (s == "中") {
          lunch++;
        } else if (s == "晚") {
          dinner++;
        } else {
          warn.showWarn("请选择完全！");
          return;
        }
      }
      if (breakfast != 0) {
        var data = this.data.choosedVeg[i];
        data.totalWeight = breakfast * data.weight;
        choosedFood[0].push(data);
      }
      if (lunch != 0) {
        var data = this.data.choosedVeg[i];
        data.totalWeight = lunch * data.weight;
        choosedFood[1].push(data);
      }
      if (dinner != 0) {
        var data = this.data.choosedVeg[i];
        data.totalWeight = dinner * data.weight;
        choosedFood[2].push(data);
      }
      for (j = 0; j < names.length; j++) {
        if (this.data.choosedVeg[i].name.indexOf(names[j].name) >= 0) {
          meal = mergeArray.mergeArray(meal, names[j].meal);
        }
      }

    }
    for (i = 0; i < this.data.choosedMilk.length; i++) {
      breakfast = 0;
      lunch = 0;
      dinner = 0;
      for (k = 0; k < this.data.choosedMilk[i].copies; k++) {
        var s = this.data.choosedMilk[i].copyArray[k];
        if (s == '早') {
          breakfast++;
        } else if (s == "中") {
          lunch++;
        } else if (s == "晚") {
          dinner++;
        } else {
          warn.showWarn("请选择完全！");
          return;
        }
      }
      if (breakfast != 0) {
        var data = this.data.choosedMilk[i];
        data.totalWeight = breakfast * data.weight;
        choosedFood[0].push(data);
      }
      if (lunch != 0) {
        var data = this.data.choosedMilk[i];
        data.totalWeight = lunch * data.weight;
        choosedFood[1].push(data);
      }
      if (dinner != 0) {
        var data = this.data.choosedMilk[i];
        data.totalWeight = dinner * data.weight;
        choosedFood[2].push(data);
      }
      for (j = 0; j < names.length; j++) {
        if (this.data.choosedMilk[i].name.indexOf(names[j].name) >= 0) {
          meal = mergeArray.mergeArray(meal, names[j].meal);
        }
      }

    }
    for (i = 0; i < this.data.choosedMeatEgg.length; i++) {
      breakfast = 0;
      lunch = 0;
      dinner = 0;
      for (k = 0; k < this.data.choosedMeatEgg[i].copies; k++) {
        var s = this.data.choosedMeatEgg[i].copyArray[k];
        if (s == '早') {
          breakfast++;
        } else if (s == "中") {
          lunch++;
        } else if (s == "晚") {
          dinner++;
        } else {
          warn.showWarn("请选择完全！");
          return;
        }
      }
      if (breakfast != 0) {
        var data = this.data.choosedMeatEgg[i];
        data.totalWeight = breakfast * data.weight;
        choosedFood[0].push(data);
      }
      if (lunch != 0) {
        var data = this.data.choosedMeatEgg[i];
        data.totalWeight = lunch * data.weight;
        choosedFood[1].push(data);
      }
      if (dinner != 0) {
        var data = this.data.choosedMeatEgg[i];
        data.totalWeight = dinner * data.weight;
        choosedFood[2].push(data);
      }
      for (j = 0; j < names.length; j++) {
        if (this.data.choosedMeatEgg[i].name.indexOf(names[j].name) >= 0) {
          meal = mergeArray.mergeArray(meal, names[j].meal);
        }
       }

    }
    for (i = 0; i < this.data.choosedGrease.length; i++) {
      breakfast = 0;
      lunch = 0;
      dinner = 0;
      for (k = 0; k < this.data.choosedGrease[i].copies; k++) {
        var s = this.data.choosedGrease[i].copyArray[k];
        if (s == '早') {
          breakfast++;
        } else if (s == "中") {
          lunch++;
        } else if (s == "晚") {
          dinner++;
        } else {
          warn.showWarn("请选择完全！");
          return;
        }
      }
      if (breakfast != 0) {
        var data = this.data.choosedGrease[i];
        data.totalWeight = breakfast * data.weight;
        choosedFood[0].push(data);
      }
      if (lunch != 0) {
        var data = this.data.choosedGrease[i];
        data.totalWeight = lunch * data.weight;
        choosedFood[1].push(data);
      }
      if (dinner != 0) {
        var data = this.data.choosedGrease[i];
        data.totalWeight = dinner * data.weight;
        choosedFood[2].push(data);
      }

      for (j = 0; j < names.length; j++) {
        if (this.data.choosedGrease[i].name.indexOf(names[j].name) >= 0) {
          meal = mergeArray.mergeArray(meal, names[j].meal);
        }
      }

    }
    for (i = 0; i < this.data.choosedNuts.length; i++) {
      breakfast = 0;
      lunch = 0;
      dinner = 0;
      for (k = 0; k < this.data.choosedNuts[i].copies; k++) {
        var s = this.data.choosedNuts[i].copyArray[k];
        if (s == '早') {
          breakfast++;
        } else if (s == "中") {
          lunch++;
        } else if (s == "晚") {
          dinner++;
        } else {
          warn.showWarn("请选择完全！");
          return;
        }
      }
      if (breakfast != 0) {
        var data = this.data.choosedNuts[i];
        data.totalWeight = breakfast * data.weight;
        choosedFood[0].push(data);
      }
      if (lunch != 0) {
        var data = this.data.choosedNuts[i];
        data.totalWeight = lunch * data.weight;
        choosedFood[1].push(data);
      }
      if (dinner != 0) {
        var data = this.data.choosedNuts[i];
        data.totalWeight = dinner * data.weight;
        choosedFood[2].push(data);
      }
      for (j = 0; j < names.length; j++) {
        if (this.data.choosedNuts[i].name.indexOf(names[j].name) >= 0) {
          meal = mergeArray.mergeArray(meal, names[j].meal);
        }
      }

    }
    var totalmeal = [];
    for (i = 0; i < meal.length; i++) {
      totalmeal.push(meals[meal[i] - 1]);
    }

    this.setData({
      choosedFood: choosedFood,
      meal: totalmeal,
    });
    var data = {
      meal: this.data.meal,
      choosedFood: this.data.choosedFood,
      choosedMeal: [],
      totalHeat: this.data.totalHeat, //每天热量
      totalProteinAmount: this.data.totalProteinAmount, //每天蛋白量
      totalqualityProtein: this.data.totalqualityProtein //每天优质蛋白量
    }
    wx.navigateTo({
      url: '../foodChoosedPage3/foodChoosedPage3?data=' + JSON.stringify(data),
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var fruitL = 0;
    var vegL = 0;
    var greaseL = 0;
    var cerealL = 0;
    var nutsL = 0;
    var meatEggL = 0;
    var milkL = 0;
    var i;
    for (i = 0; i < this.data.choosedFruit.length; i++) {
      fruitL = fruitL + this.data.choosedFruit[i].copies;
    }
    for (i = 0; i < this.data.choosedVeg.length; i++) {
      vegL = vegL + this.data.choosedVeg[i].copies;
    }
    for (i = 0; i < this.data.choosedGrease; i++) {
      greaseL = greaseL + this.data.choosedGrease[i].copies;
    }
    for (i = 0; i < this.data.choosedMilk.length; i++) {
      milkL = milkL + this.data.choosedMilk[i].copies;
    }
    for (i = 0; i < this.data.choosedMeatEgg.length; i++) {
      meatEggL = meatEggL + this.data.choosedMeatEgg[i].copies;
    }
    for (i = 0; i < this.data.choosedCereal.length; i++) {
      cerealL = cerealL + this.data.choosedCereal[i].copies;
    }
    for (i = 0; i < this.data.choosedNuts.length; i++) {
      nutsL = nutsL + this.data.choosedNuts[i].copies;
    }
    var totalHeat = 90 * (fruitL + vegL + greaseL + milkL + meatEggL + cerealL + nutsL);
    var totalProteinAmount = fruitL * 1 + vegL * 5 + milkL * 5 + meatEggL * 9 + cerealL * 2;
    var totalqualityProtein = milkL * 5 + meatEggL * 9;
    this.setData({
      totalHeat: totalHeat, //每天热量
      totalProteinAmount: totalProteinAmount, //每天蛋白量
      totalqualityProtein: totalqualityProtein //每天优质蛋白量
    });
  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '肾病营养小程序 ',
      desc: '这是一个专门为肾病患者制定食谱的小程序',
      path: '/pages/page1/page1'
     // path: '/pages/foodChoosedPage2/foodChoosedPage2'
    }
  }
})
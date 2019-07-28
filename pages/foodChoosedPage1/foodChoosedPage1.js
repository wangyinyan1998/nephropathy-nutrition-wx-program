// pages/foodChoose/foodChoose.js
var cerealDatas = require("../../utils/datas/cerealDatas.js");
var proteinDatas = require("../../utils/datas/proteinDatas.js");
var greaseDatas = require("../../utils/datas/greaseDatas.js");
var vegetableFruitDatas = require("../../utils/datas/vegetableFruitDatas.js");
var array = require("../../utils/deleteItem.js");
var remainDatas = require("../../utils/datas/remainDatas.js");
var app = getApp();
var warn = require("../../utils/showWarn.js");
var nickname = wx.getStorageSync("nickname");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberOfQualProtein: 0, //每天优质蛋白份数
    numberOfCereal: 0, //谷物类份数
    numberOfGrease: 0, //油脂类份数
    numberOfVegetable: 0, //蔬菜份数
    numberOfFruit: 0, //水果类份数
    numberOfMilk: 0, //奶类份数
    numberOfMeatEgg: 0, //肉蛋类份数
    numberOfNuts: 0, //硬果类份数
    grease: greaseDatas.getGrease(), //油脂类
    milk: proteinDatas.getMilk(), //奶类
    meatEgg: proteinDatas.getMeatEggs(), //肉蛋类
    cereal: cerealDatas.cerealDatas(), //谷物类
    vegetable: vegetableFruitDatas.getVegetablesDatas(), //蔬菜类
    fruit: vegetableFruitDatas.getFruitDatas(), //水果类
    nuts: remainDatas.getNuts(), //坚果类
    choosedFruit: [], //被选择的水果类
    choosedVeg: [], //被选择的蔬菜类
    choosedGrease: [], //被选择的油脂类
    choosedMilk: [], //被选择的奶类
    choosedMeatEgg: [], //被选择的肉蛋类
    choosedCereal: [], //被选择的谷物类
    choosedNuts: [], //被选择的坚果类
    choosedFood:[],
    showIngredients: 1, //showIngredients如果是1，表示现在页面上展示的（即用户正在选择）是谷类的食材，2：是蔬菜的食材，3：水果的食材，4：奶类的食材，5：肉蛋类食材，6：油脂坚果类
    showBasket: false,
    choosedNumber: 0,
    totalHeat: 0, //已选择的每天热量
    totalProteinAmount: 0, //已选择的每天蛋白量
    totalqualityProtein: 0, //已选择的每天优质蛋白量
    meal: [],

  
  },
  showBasket: function(e) {
    if (this.data.showBasket) {
      this.setData({
        showBasket: false
      });
    } else {
      this.setData({
        showBasket: true
      });
    }
  },
  /**选择 */
  checkboxChange: function(e) {
    var values = e.detail.value;
    var length = values.length;
    var i;
    var number;
    var id = e.currentTarget.id; //如果id=0则为早饭，如果id=1,则为午饭，如果id=2则为晚饭
    switch (this.data.showIngredients) {
      case 1:
        var cereal = this.data.cereal;
        var array = this.data.choosedCereal;
        if (this.check(1) <= 0) {
          warn.showWarn("食材选择过多");
          break;
        }

        number = this.data.choosedNumber + 1;
        for (i = 0; i < length; i++) {
          if (cereal[values[i] - 1].name.length > 8) {
            cereal[values[i] - 1].abname = cereal[values[i] - 1].name.substring(0, 5) + "...";
          }
          cereal[values[i] - 1].checked = true;
          cereal[values[i] - 1].copies = 1;
          cereal[values[i] - 1].copyArray = [1, ];
          array.push(cereal[values[i] - 1]);
        }
        this.setData({
          choosedCereal: array,
          choosedNumber: number,
          cereal: cereal
        });
        break;
      case 2:
        var vegetable = this.data.vegetable;
        var array = this.data.choosedVeg;
        if (this.check(2) <= 0) {
          warn.showWarn("食材选择过多");

          break;
        }
        number = this.data.choosedNumber + 1;
        for (i = 0; i < length; i++) {
          if (vegetable[values[i] - 1].name.length > 8) {
            vegetable[values[i] - 1].abname = vegetable[values[i] - 1].name.substring(0, 5) + "...";
          }

          vegetable[values[i] - 1].checked = true;
          vegetable[values[i] - 1].copies = 1;
          vegetable[values[i] - 1].copyArray = [1];
          array.push(vegetable[values[i] - 1]);
        }
        this.setData({
          choosedVeg: array,
          choosedNumber: number,
          vegetable: vegetable
        });
        break;
      case 3:
        var fruit = this.data.fruit;
        var array = this.data.choosedFruit;
        if (this.check(3) <= 0) {
          warn.showWarn("食材选择过多");

          break;
        }

        number = this.data.choosedNumber + 1;
        for (i = 0; i < length; i++) {
          if (fruit[values[i] - 1].name.length > 8) {
            fruit[values[i] - 1].abname = fruit[values[i] - 1].name.substring(0, 5) + "...";
          }

          fruit[values[i] - 1].checked = true;
          fruit[values[i] - 1].copies = 1;
          fruit[values[i] - 1].copyArray = [1];
          array.push(fruit[values[i] - 1]);

        }
        this.setData({
          choosedFruit: array,
          choosedNumber: number,
          fruit: fruit
        });
        break;
      case 4:
        var milk = this.data.milk;
        var array = this.data.choosedMilk;
        if (this.check(4) <= 0) {
          warn.showWarn("食材选择过多");
          break;
        }

        number = this.data.choosedNumber + 1;
        for (i = 0; i < length; i++) {
          if (milk[values[i] - 1].name.length > 8) {
            milk[values[i] - 1].abname = milk[values[i] - 1].name.substring(0, 5) + "...";
          }
          milk[values[i] - 1].checked = true;
          milk[values[i] - 1].copies = 1;
          milk[values[i] - 1].copyArray = [1];
          array.push(milk[values[i] - 1]);

        }
        this.setData({
          choosedMilk: array,
          choosedNumber: number,
          milk: milk
        });
        break;
      case 5:
        var meatEgg = this.data.meatEgg;
        var array = this.data.choosedMeatEgg;
        if (this.check(5) <= 0) {
          warn.showWarn("食材选择过多");

          break;
        }

        number = this.data.choosedNumber + 1;
        for (i = 0; i < length; i++) {
          if (meatEgg[values[i] - 1].name.length > 8) {
            meatEgg[values[i] - 1].abname = meatEgg[values[i] - 1].name.substring(0, 5) + "...";
          }
          meatEgg[values[i] - 1].checked = true;
          meatEgg[values[i] - 1].copies = 1;
          meatEgg[values[i] - 1].copyArray = [1];
          array.push(meatEgg[values[i] - 1]);

        }
        this.setData({
          choosedMeatEgg: array,
          choosedNumber: number,
          meatEgg: meatEgg
        });
        break;
      case 6:
        var grease = this.data.grease;
        var array = this.data.choosedGrease;
        if (this.check(6) <= 0) {
          warn.showWarn("食材选择过多");

          break;
        }
        number = this.data.choosedNumber + 1;
        for (i = 0; i < length; i++) {
          if (grease[values[i] - 1].name.length > 8) {
            grease[values[i] - 1].abname = grease[values[i] - 1].name.substring(0, 5) + "...";
          }
          grease[values[i] - 1].checked = true;
          grease[values[i] - 1].copies = 1;
          grease[values[i] - 1].copyArray = [1];
          array.push(grease[values[i] - 1]);

        }
        this.setData({
          choosedGrease: array,
          choosedNumber: number,
          grease: grease
        });
        break;
      case 7:
        var nuts = this.data.nuts;
        var array = this.data.choosedNuts;
        if (this.check(7) <= 0) {
          warn.showWarn("食材选择过多");
          break;
        }
        number = this.data.choosedNumber + 1;
        for (i = 0; i < length; i++) {
          if (nuts[values[i] - 1].name.length > 8) {
            nuts[values[i] - 1].abname = nuts[values[i] - 1].name.substring(0, 5) + "...";
          }
          nuts[values[i] - 1].checked = true;
          nuts[values[i] - 1].copies = 1;
          nuts[values[i] - 1].copyArray = [1];
          array.push(nuts[values[i] - 1]);
        }
        this.setData({
          choosedNuts: array,
          choosedNumber: number,
          nuts: nuts
        });
        break;
    }
  },
  cerealShow: function(e) {
    this.setData({
      showIngredients: 1
    })
  },
  VegShow: function(e) {
    this.setData({
      showIngredients: 2
    })
  },
  fruitShow: function(e) {
    this.setData({
      showIngredients: 3
    })
  },
  milkShow: function(e) {
    this.setData({
      showIngredients: 4
    })
  },
  meatEggShow: function(e) {
    this.setData({
      showIngredients: 5
    })
  },
  greaseShow: function(e) {
    this.setData({
      showIngredients: 6
    })
  },
  nutsShow: function(e) {
    this.setData({
      showIngredients: 7
    })
  },
  check: function(number) {
    var length = 0;
    var i;
    switch (number) {
      case 3:
        for (i = 0; i < this.data.choosedFruit.length; i++) {
          length = length + this.data.choosedFruit[i].copies;
        }
        if (length < this.data.numberOfFruit) {
          return 1;
        } else if (length == this.data.numberOfFruit)
          return 0;
        else {
          return -1;
        }

      case 2:
        for (i = 0; i < this.data.choosedVeg.length; i++) {
          length = length + this.data.choosedVeg[i].copies;
        }
        if (length < this.data.numberOfVegetable) {
          return 1;
        } else if (length == this.data.numberOfVegetable) {
          return 0;
        } else {
          return -1;
        }
        break;
      case 6:
        for (i = 0; i < this.data.choosedGrease.length; i++) {
          length = length + this.data.choosedGrease[i].copies;
        }
        if (length < this.data.numberOfGrease) {
          return 1;
        } else if (length == this.data.numberOfGrease)
          return 0;
        else {
          return -1;
        }
      case 4:
        for (i = 0; i < this.data.choosedMilk.length; i++) {
          length = length + this.data.choosedMilk[i].copies;
        }
        if (length < this.data.numberOfMilk) {
          return 1;
        } else if (length == this.data.numberOfMilk)
          return 0;
        else {
          return -1;
        }
      case 5:
        for (i = 0; i < this.data.choosedMeatEgg.length; i++) {
          length = length + this.data.choosedMeatEgg[i].copies;
        }
        if (length < this.data.numberOfMeatEgg) {
          return 1;
        } else if (length == this.data.numberOfMeatEgg)
          return 0;
        else {
          return -1;
        }
      case 1:
        for (i = 0; i < this.data.choosedCereal.length; i++) {
          length = length + this.data.choosedCereal[i].copies;
        }
        if (length < this.data.numberOfCereal) {
          return 1;
        } else if (length == this.data.numberOfCereal)
          return 0;
        else {
          return -1;
        }
      case 7:
        for (i = 0; i < this.data.choosedNuts.length; i++) {
          length = length + this.data.choosedNuts[i].copies;
        }
        if (length < this.data.numberOfNuts) {
          return 1;
        } else if (length == this.data.numberOfNuts)
          return 0;
        else {
          return -1;
        }
    }
  },
  deleteCereal: function(e) {
    var choosedCereals = this.data.choosedCereal;
    var length = choosedCereals.length;
    var number = this.data.choosedNumber;
    var cereal = this.data.cereal;
    for (var i = 0; i < length; i++) {
      var s = choosedCereals[i].id;
      if (s == e.currentTarget.id) {
        choosedCereals[i].copies--;
        cereal[choosedCereals[i].id - 1].copies--;
        choosedCereals[i].copyArray.pop();
        if (choosedCereals[i].copies == 0) {
          cereal[choosedCereals[i].id - 1].checked = false;
          choosedCereals = array.deleteItem(choosedCereals, i);

        }
        number--;
        break;
      }
    }
    this.setData({
      choosedCereal: choosedCereals,
      choosedNumber: number,
      cereal: cereal
    })
  
  },

  addCereal: function(e) {
    let choosedCereals = this.data.choosedCereal;
    let length = choosedCereals.length;
    let number = this.data.choosedNumber;
    let cereal = this.data.cereal;

    if (this.check(1) <= 0) {
      warn.showWarn("食材选择过多");
      return;
    }
    for (var i = 0; i < this.data.choosedCereal.length; i++) {
      var s = choosedCereals[i].id;
      if (s == e.currentTarget.id) {
        choosedCereals[i].copies++;
        choosedCereals[i].copyArray.push(choosedCereals[i].copies);
        cereal[choosedCereals[i].id - 1].copies++;
        number++;
        break;
      }
    }
    this.setData({
      choosedCereal: choosedCereals,
      choosedNumber: number,
      cereal: cereal
    })
   
  },
  deleteVeg: function(e) {
    var choosedData = this.data.choosedVeg;
    var length = choosedData.length;
    var number = this.data.choosedNumber;
    var vegetable = this.data.vegetable;

    for (var i = 0; i < length; i++) {
      var s = choosedData[i].id;
      if (s == e.currentTarget.id) {
        choosedData[i].copies--;
        vegetable[choosedData[i].id - 1].copies--;
        choosedData[i].copyArray.pop();
        if (choosedData[i].copies == 0) {
          vegetable[choosedData[i].id - 1].checked = false;
          choosedData = array.deleteItem(choosedData, i);
        }
        number--;
        break;
      }
    }
    this.setData({
      choosedVeg: choosedData,
      choosedNumber: number,
      vegetable: vegetable
    })
  
  },
  addVeg: function(e) {
    var choosedData = this.data.choosedVeg;
    var length = choosedData.length;
    var number = this.data.choosedNumber;
    var vegetable = this.data.vegetable;
    if (this.check(2) <= 0) {
      warn.showWarn("食材选择过多");
      return;
    }
    for (var i = 0; i < length; i++) {
      var s = choosedData[i].id;
      if (s == e.currentTarget.id) {
        choosedData[i].copies++;
        vegetable[choosedData[i].id - 1].copies++;
        choosedData[i].copyArray.push(choosedData[i].copies);
        number++;
        break;
      }
    }
    this.setData({
      choosedVeg: choosedData,
      choosedNumber: number,
      vegetable: vegetable
    })
  
  },
  deleteFruit: function(e) {
    var choosedData = this.data.choosedFruit;
    var length = choosedData.length;
    var number = this.data.choosedNumber;
    var data = this.data.fruit;

    for (var i = 0; i < length; i++) {
      var s = choosedData[i].id;
      if (s == e.currentTarget.id) {
        choosedData[i].copies--;
        data[choosedData[i].id - 1].copies--;
        choosedData[i].copyArray.pop();
        if (choosedData[i].copies == 0) {
          data[choosedData[i].id - 1].checked = false;
          choosedData = array.deleteItem(choosedData, i);
        }
        number--;
        break;
      }
    }
    this.setData({
      choosedFruit: choosedData,
      choosedNumber: number,
      fruit: data
    })
 
  },
  addFruit: function(e) {
    var choosedData = this.data.choosedFruit;
    var length = choosedData.length;
    var number = this.data.choosedNumber;
    var data = this.data.fruit;
    if (this.check(3) <= 0) {
      warn.showWarn("食材选择过多");
      return;
    }
    for (var i = 0; i < length; i++) {
      var s = choosedData[i].id;
      if (s == e.currentTarget.id) {
        choosedData[i].copies++;
        data[choosedData[i].id - 1].copies++;
        choosedData[i].copyArray.push(choosedData[i].copies);
        number++;
        break;
      }
    }
    this.setData({
      choosedFruit: choosedData,
      choosedNumber: number,
      fruit: data
    })
  },
  deleteMilk: function(e) {
    var choosedData = this.data.choosedMilk;
    var length = choosedData.length;
    var number = this.data.choosedNumber;
    var data = this.data.milk;
    for (var i = 0; i < length; i++) {
      var s = choosedData[i].id;
      if (s == e.currentTarget.id) {
        choosedData[i].copies--;
        data[choosedData[i].id - 1].copies--;
        choosedData[i].copyArray.pop();
        if (choosedData[i].copies == 0) {
          data[choosedData[i].id - 1].checked = false;
          choosedData = array.deleteItem(choosedData, i);
        }
        number--;
        break;
      }
    }
    this.setData({
      choosedMilk: choosedData,
      choosedNumber: number,
      milk: data
    })
 
  },
  addMilk: function(e) {
    var choosedData = this.data.choosedMilk;
    var length = choosedData.length;
    var number = this.data.choosedNumber;
    var data = this.data.milk;
    if (this.check(4) <= 0) {
      warn.showWarn("食材选择过多");
      return;
    }
    for (var i = 0; i < length; i++) {
      var s = choosedData[i].id;
      if (s == e.currentTarget.id) {
        choosedData[i].copies++;
        data[choosedData[i].id - 1].copies++;
        choosedData[i].copyArray.push(choosedData[i].copies);
        number++;
        break;
      }
    }
    this.setData({
      choosedMilk: choosedData,
      choosedNumber: number,
      milk: data
    })
  },
  deleteMeatEgg: function(e) {
    var choosedData = this.data.choosedMeatEgg;
    var length = choosedData.length;
    var number = this.data.choosedNumber;
    var data = this.data.meatEgg;
    for (var i = 0; i < length; i++) {
      var s = choosedData[i].id;
      if (s == e.currentTarget.id) {
        choosedData[i].copies--;
        data[choosedData[i].id - 1].copies--;
        choosedData[i].copyArray.pop();
        if (choosedData[i].copies == 0) {
          data[choosedData[i].id - 1].checked = false;
          choosedData = array.deleteItem(choosedData, i);
        }
        number--;
        break;
      }
    }
    this.setData({
      choosedMeatEgg: choosedData,
      choosedNumber: number,
      meatEgg: data
    })
  },
  addMeatEgg: function(e) {
    var choosedData = this.data.choosedMeatEgg;
    var length = choosedData.length;
    var number = this.data.choosedNumber;
    var data = this.data.meatEgg;
    if (this.check(5) <= 0) {
      warn.showWarn("食材选择过多");
      return;
    }
    for (var i = 0; i < length; i++) {
      var s = choosedData[i].id;
      if (s == e.currentTarget.id) {
        choosedData[i].copies++;
        choosedData[i].copyArray.push(choosedData[i].copies);
        data[choosedData[i].id - 1].copies++;
        number++;
        break;
      }
    }
    this.setData({
      choosedMeatEgg: choosedData,
      choosedNumber: number,
      meatEgg: data
    })
  
  },
  deleteGrease: function (e) {
    var choosedData = this.data.choosedGrease;
    var length = choosedData.length;
    var number = this.data.choosedNumber;
    var data = this.data.grease;
    for (var i = 0; i < length; i++) {
      var s = choosedData[i].id;
      if (s == e.currentTarget.id) {
        choosedData[i].copies--;
        data[choosedData[i].id - 1].copies--;
        choosedData[i].copyArray.pop();
        if (choosedData[i].copies == 0) {
          data[choosedData[i].id - 1].checked = false;
          choosedData = array.deleteItem(choosedData, i);
        }
        number--;
        break;
      }
    }
    this.setData({
      choosedGrease: choosedData,
      choosedNumber: number,
      grease: data
    })
  
  },
  addGrease: function(e) {
    var choosedData = this.data.choosedGrease;
    var length = choosedData.length;
    var number = this.data.choosedNumber;
    var data = this.data.grease;
    if (this.check(6) <= 0) {
      warn.showWarn("食材选择过多");
      return;
    }
    for (var i = 0; i < length; i++) {
      var s = choosedData[i].id;
      if (s == e.currentTarget.id) {
        choosedData[i].copies++;
        data[choosedData[i].id - 1].copies++;
        choosedData[i].copyArray.push(choosedData[i].copies);
        number++;
        break;
      }
    }
    this.setData({
      choosedGrease: choosedData,
      choosedNumber: number,
      grease: data
    })
   
  },
  deleteNuts: function(e) {
    var choosedData = this.data.choosedNuts;
    var length = choosedData.length;
    var number = this.data.choosedNumber;
    var data = this.data.nuts;
    for (var i = 0; i < length; i++) {
      var s = choosedData[i].id;
      if (s == e.currentTarget.id) {
        choosedData[i].copies--;
        data[choosedData[i].id - 1].copies--;
        choosedData[i].copyArray.pop();
        if (choosedData[i].copies == 0) {
          data[choosedData[i].id - 1].checked = false;
          choosedData = array.deleteItem(choosedData, i);
        }
        number--;
        break;
      }
    }
    this.setData({
      choosedNuts: choosedData,
      choosedNumber: number,
      nuts: data
    })
  
  },
  addNuts: function(e) {
    var choosedData = this.data.choosedNuts;
    var length = choosedData.length;
    var number = this.data.choosedNumber;
    var data = this.data.nuts;
    if (this.check(7) <= 0) {
      warn.showWarn("食材选择过多");
      return;
    }
    for (var i = 0; i < length; i++) {
      var s = choosedData[i].id;
      if (s == e.currentTarget.id) {
        choosedData[i].copies++;
        choosedData[i].copyArray.push(choosedData[i].copies);
        data[choosedData[i].id - 1].copies++;
        number++;
        break;
      }
    }
    this.setData({
      choosedNuts: choosedData,
      choosedNumber: number,
      nuts: data
    })
   
  },
  submitIngredient: function(e) {
   
    var ingredientname = ["谷类", "蔬菜", "水果", "奶类", "肉蛋类", "油脂类", "坚果类"];
    console.log(this.data);
    for (var i = 0; i <= 6; i++) {
      if (this.check(i + 1) != 0) {
        warn.showWarn(ingredientname[i] + "未选足");
        return;
      }
    }
    if (this.data.numberOfCereal || this.data.numberOfFruit || this.data.numberOfGrease ||
      this.data.numberOfMeatEgg || this.data.numberOfMilk || this.data.numberOfNuts ||
      this.data.numberOfVegetable) {

     /* this.setData({
        page: 2
      });*/
      var data = {
        choosedCereal: this.data.choosedCereal,
        choosedVeg: this.data.choosedVeg,
        choosedGrease: this.data.choosedGrease,
        choosedFruit: this.data.choosedFruit,
        choosedMilk: this.data.choosedMilk,
        choosedMeatEgg: this.data.choosedMeatEgg,
        choosedNuts: this.data.choosedNuts,
        meal: this.data.meal,
        choosedFood: this.data.choosedFood,
      } 
      wx.navigateTo({
        url:'../foodChoosedPage2/foodChoosedPage2?data='+JSON.stringify(data),
        //url: '../movable/movable?data='+JSON.stringify(data),
      })
    }
    wx.pageScrollTo({
      scrollTop: 0
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   /**监听加载 */
     /* this.setData({
        grease: greaseDatas.getGrease(), //油脂类
        milk: proteinDatas.getMilk(), //奶类
        meatEgg: proteinDatas.getMeatEggs(), //肉蛋类
        cereal: cerealDatas.cerealDatas(), //谷物类
        vegetable: vegetableFruitDatas.getVegetablesDatas(), //蔬菜类
        fruit: vegetableFruitDatas.getFruitDatas(), //水果类
        nuts: remainDatas.getNuts(), //坚果类
        choosedFruit: [], //被选择的水果类
        choosedVeg: [], //被选择的蔬菜类
        choosedGrease: [], //被选择的油脂类
        choosedMilk: [], //被选择的奶类
        choosedMeatEgg: [], //被选择的肉蛋类
        choosedCereal: [], //被选择的谷物类
        choosedNuts: [], //被选择的坚果类
        choosedFood: [],
        showIngredients: 1, //showIngredients如果是1，表示现在页面上展示的（即用户正在选择）是谷类的食材，2：是蔬菜的食材，3：水果的食材，4：奶类的食材，5：肉蛋类食材，6：油脂坚果类
        showBasket: false,
        choosedNumber: 0,
        page: 1,
        totalHeat: 0, //已选择的每天热量
        totalProteinAmount: 0, //已选择的每天蛋白量
        totalqualityProtein: 0, //已选择的每天优质蛋白量
        meal: [],
      })*/
   
    var height;
    var age;
    if (!app.globalData.userHealth) {
      if (wx.getStorageSync(nickname + "height")) {
        height = wx.getStorageSync(nickname + "height");
        age = wx.getStorageSync(nickname + "age");
      } else {
        this.setData({
          page: 1
        });
        return;
      }
    } else {
      height = app.globalData.userHealth.height;
      age = app.globalData.userHealth.age;
    }
    var standardweight = height - 105;
    var dailyHeat;
    var dailyProteinAmount = standardweight * 0.7;
    var kidneyIndex = wx.getStorageSync(nickname + "kidneyIndex", this.data.kidneyIndex);
    if (kidneyIndex != 0) {
      dailyProteinAmount = standardweight * 1.2;
    }
    var qualityProtein = dailyProteinAmount * 0.6;
    dailyHeat = standardweight * 30;
    var numberOfMeatEgg = (qualityProtein - 5) / 9;
    var numberOfFruit = dailyProteinAmount - qualityProtein - 12 - 15;

    numberOfMeatEgg = numberOfMeatEgg > 0 ? numberOfMeatEgg : 0;
    numberOfFruit = numberOfFruit > 0 ? numberOfFruit + 1 : 1;
    var remainHeat = (dailyHeat - 90 * (numberOfFruit + numberOfMeatEgg + 2 + 3 + 6 + 1)) / 90;
    remainHeat = remainHeat >= 0 ? remainHeat : 0;
    this.setData({
      numberOfMeatEgg: parseInt(numberOfMeatEgg),
      numberOfVegetable: 2,
      numberOfCereal: 6,
      numberOfMilk: 1,
      numberOfGrease: 3, //两份油脂类
      numberOfFruit: parseInt(numberOfFruit),
      numberOfNuts: parseInt(remainHeat),
      grease: greaseDatas.getGrease(), //油脂类
      milk: proteinDatas.getMilk(), //奶类
      meatEgg: proteinDatas.getMeatEggs(), //肉蛋类
      cereal: cerealDatas.cerealDatas(), //谷物类
      vegetable: vegetableFruitDatas.getVegetablesDatas(), //蔬菜类
      fruit: vegetableFruitDatas.getFruitDatas(), //水果类
      nuts: remainDatas.getNuts(), //坚果类
      choosedFruit: [], //被选择的水果类
      choosedVeg: [], //被选择的蔬菜类
      choosedGrease: [], //被选择的油脂类
      choosedMilk: [], //被选择的奶类
      choosedMeatEgg: [], //被选择的肉蛋类
      choosedCereal: [], //被选择的谷物类
      choosedNuts: [], //被选择的坚果类
      choosedFood: [],
      showIngredients: 1, //showIngredients如果是1，表示现在页面上展示的（即用户正在选择）是谷类的食材，2：是蔬菜的食材，3：水果的食材，4：奶类的食材，5：肉蛋类食材，6：油脂坚果类
      showBasket: false,
      choosedNumber: 0,
      page: 1,
      totalHeat: 0, //已选择的每天热量
      totalProteinAmount: 0, //已选择的每天蛋白量
      totalqualityProtein: 0, //已选择的每天优质蛋白量
      meal: [],
    });
   

  },

  onShow: function () {
   
  }, 
 

  /**page2相关函数 */
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
   
    return {
      title: '肾病营养小程序 ',
      desc: '这是一个专门为肾病患者制定食谱的小程序',
      path: '/pages/page1/page1'
      //path: '/pages/foodChoosedPage1/foodChoosedPage1'
    }

  },

 
})

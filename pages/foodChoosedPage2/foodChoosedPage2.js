// pages/movable/movable.js
Page({
  data: {
    x1: 0, y1: 0,
    x2: 0, y2: 0,
    x3: 0, y3: 0,
    x4: 0, y4: 0,

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
    totalHeat: 0,
    choosedCereal_projection: []
  },
  onLoad: function (options) {
    var data = JSON.parse(options.data);
    this.setData(data);
    console.log(data);
    var kk = 0;
    var xx=-1;
    var yy=0;
    var hh=80;
    var choosedCereal_projection = [];
    var k = 0;
    for (var i = 0; i < this.data.choosedCereal.length; i++) {
      if (kk % 6 == 0) {
        xx = xx + 1;
      }
      if (kk == 7 || kk==10){
        kk = kk + 1
      }
      yy = kk - 6 * xx;
      for (var j = 0; j < this.data.choosedCereal[i].copyArray.length; j++){
        choosedCereal_projection.push( {
          name: this.data.choosedCereal[i].name,
          weight: this.data.choosedCereal[i].weight,
          url: this.data.choosedCereal[i].url,
          projection: i,
          projection_copy: j,
          projection_index: k,
          projection_bind: "onMovedCereal_"+k,
          x: xx * 100,
          y: yy * hh
        });
        k++;
      }
      kk++;
    }
    this.setData({
      choosedCereal_projection: choosedCereal_projection
    });

    var choosedVeg_projection = [];
    var k = 0;
    for (var i = 0; i < this.data.choosedVeg.length; i++) {
      if (kk % 6 == 0) {
        xx = xx + 1;
      }
      if (kk == 7 || kk == 10) {
        kk = kk + 1
      }
      yy = kk - 6 * xx;
      for (var j = 0; j < this.data.choosedVeg[i].copyArray.length; j++) {
        choosedVeg_projection.push({
          name: this.data.choosedVeg[i].name,
          weight: this.data.choosedVeg[i].weight,
          url:this.data.choosedVeg[i].url,
          projection: i,
          projection_copy: j,
          projection_index: k,
          projection_bind: "onMovedVeg_" + k,
          x: xx * 100,
          y: yy * hh
        });
        k++;
      }
      kk++;
    }
    this.setData({
      choosedVeg_projection: choosedVeg_projection
    });

    var choosedFruit_projection = [];
    var k = 0;
    for (var i = 0; i < this.data.choosedFruit.length; i++) {
      if (kk % 6 == 0) {
        xx = xx + 1;
      }
      if (kk == 7 || kk == 10) {
        kk = kk + 1
      }
      yy = kk - 6 * xx;
      for (var j = 0; j < this.data.choosedFruit[i].copyArray.length; j++) {
        choosedFruit_projection.push({
          name: this.data.choosedFruit[i].name,
          weight: this.data.choosedFruit[i].weight,
          url:this.data.choosedFruit[i].url,
          projection: i,
          projection_copy: j,
          projection_index: k,
          projection_bind: "onMovedFruit_" + k,
          x: xx * 100,
          y: yy * hh
        });
        k++;
      }
      kk++;
    }
    this.setData({
      choosedFruit_projection: choosedFruit_projection
    });

    var choosedMilk_projection = [];
    var k = 0;
    for (var i = 0; i < this.data.choosedMilk.length; i++) {
      if (kk % 6 == 0) {
        xx = xx + 1;
      }
      if (kk == 7 || kk == 10) {
        kk = kk + 1
      }
      yy = kk - 6 * xx;
      for (var j = 0; j < this.data.choosedMilk[i].copyArray.length; j++) {
        choosedMilk_projection.push({
          name: this.data.choosedMilk[i].name,
          weight: this.data.choosedMilk[i].weight,
          url:this.data.choosedMilk[i].url,
          projection: i,
          projection_copy: j,
          projection_index: k,
          projection_bind: "onMovedMilk_" + k,
          x: xx * 100,
          y: yy * hh
        });
        k++;
      }
      kk++;
    }
    this.setData({
      choosedMilk_projection: choosedMilk_projection
    });

    var choosedMeatEgg_projection = [];
    var k = 0;
    for (var i = 0; i < this.data.choosedMeatEgg.length; i++) {
      if (kk % 6 == 0) {
        xx = xx + 1;
      }
      if (kk == 7 || kk == 10) {
        kk = kk + 1
      }
      yy = kk - 6 * xx;
      for (var j = 0; j < this.data.choosedMeatEgg[i].copyArray.length; j++) {
        choosedMeatEgg_projection.push({
          name: this.data.choosedMeatEgg[i].name,
          weight: this.data.choosedMeatEgg[i].weight,
          url:this.data.choosedMeatEgg[i].url,
          projection: i,
          projection_copy: j,
          projection_index: k,
          projection_bind: "onMovedMeatEgg_" + k,
          x: xx * 100,
          y: yy * hh
        });
        k++;
      }
      kk++;
    }
    this.setData({
      choosedMeatEgg_projection: choosedMeatEgg_projection
    });

    var choosedGrease_projection = [];
    var k = 0;
    for (var i = 0; i < this.data.choosedGrease.length; i++) {
      if (kk % 6 == 0) {
        xx = xx + 1;
      }
      if (kk == 7 || kk == 10) {
        kk = kk + 1
      }
      yy = kk - 6 * xx;
      for (var j = 0; j < this.data.choosedGrease[i].copyArray.length; j++) {
        choosedGrease_projection.push({
          name: this.data.choosedGrease[i].name,
          weight: this.data.choosedGrease[i].weight,
          url:this.data.choosedGrease[i].url,
          projection: i,
          projection_copy: j,
          projection_index: k,
          projection_bind: "onMovedGrease_" + k,
          x: xx * 100,
          y: yy * hh
        });
        k++;
      }
      kk++;
    }
    this.setData({
      choosedGrease_projection: choosedGrease_projection
    });

    var choosedNuts_projection = [];
    var k = 0;
    for (var i = 0; i < this.data.choosedNuts.length; i++) {
      if (kk % 6 == 0) {
        xx = xx + 1;
      }
      if (kk == 7 || kk == 10) {
        kk = kk + 1
      }
      yy = kk - 6 * xx;
      for (var j = 0; j < this.data.choosedNuts[i].copyArray.length; j++) {
        choosedNuts_projection.push({
          name: this.data.choosedNuts[i].name,
          weight: this.data.choosedNuts[i].weight,
          url:this.data.choosedNuts[i].url,
          projection: i,
          projection_copy: j,
          projection_index: k,
          projection_bind: "onMovedNuts_" + k,
          x: xx * 100,
          y: yy * hh
        });
        k++;
      }
      kk++;
    }
    this.setData({
      choosedNuts_projection: choosedNuts_projection
    });

  },


  onMovedCereal_0: function (e) {
    var index = 0;
    var choosedData_projection = this.data.choosedCereal_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedCereal_projection: choosedData_projection
    });
  },

  onMovedCereal_1: function (e) {
    var index = 1;
    var choosedData_projection = this.data.choosedCereal_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedCereal_projection: choosedData_projection
    });
  },

  onMovedCereal_2: function (e) {
    var index = 2;
    var choosedData_projection = this.data.choosedCereal_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedCereal_projection: choosedData_projection
    });
  },

  onMovedCereal_3: function (e) {
    var index = 3;
    var choosedData_projection = this.data.choosedCereal_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedCereal_projection: choosedData_projection
    });
  },

  onMovedCereal_4: function (e) {
    var index = 4;
    var choosedData_projection = this.data.choosedCereal_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedCereal_projection: choosedData_projection
    });
  },

  onMovedCereal_5: function (e) {
    var index = 5;
    var choosedData_projection = this.data.choosedCereal_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedCereal_projection: choosedData_projection
    });
  },

  onMovedCereal_6: function (e) {
    var index = 6;
    var choosedData_projection = this.data.choosedCereal_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedCereal_projection: choosedData_projection
    });
  },

  onMovedCereal_7: function (e) {
    var index = 7;
    var choosedData_projection = this.data.choosedCereal_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedCereal_projection: choosedData_projection
    });
  },

  onMovedCereal_8: function (e) {
    var index = 8;
    var choosedData_projection = this.data.choosedCereal_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedCereal_projection: choosedData_projection
    });
  },

  onMovedCereal_9: function (e) {
    var index = 9;
    var choosedData_projection = this.data.choosedCereal_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedCereal_projection: choosedData_projection
    });
  },

  onMovedVeg_0: function (e) {
    var index = 0;
    var choosedData_projection = this.data.choosedVeg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedVeg_projection: choosedData_projection
    });
  },

  onMovedVeg_1: function (e) {
    var index = 1;
    var choosedData_projection = this.data.choosedVeg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedVeg_projection: choosedData_projection
    });
  },

  onMovedVeg_2: function (e) {
    var index = 2;
    var choosedData_projection = this.data.choosedVeg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedVeg_projection: choosedData_projection
    });
  },

  onMovedVeg_3: function (e) {
    var index = 3;
    var choosedData_projection = this.data.choosedVeg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedVeg_projection: choosedData_projection
    });
  },

  onMovedVeg_4: function (e) {
    var index = 4;
    var choosedData_projection = this.data.choosedVeg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedVeg_projection: choosedData_projection
    });
  },

  onMovedVeg_5: function (e) {
    var index = 5;
    var choosedData_projection = this.data.choosedVeg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedVeg_projection: choosedData_projection
    });
  },

  onMovedVeg_6: function (e) {
    var index = 6;
    var choosedData_projection = this.data.choosedVeg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedVeg_projection: choosedData_projection
    });
  },

  onMovedVeg_7: function (e) {
    var index = 7;
    var choosedData_projection = this.data.choosedVeg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedVeg_projection: choosedData_projection
    });
  },

  onMovedVeg_8: function (e) {
    var index = 8;
    var choosedData_projection = this.data.choosedVeg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedVeg_projection: choosedData_projection
    });
  },

  onMovedVeg_9: function (e) {
    var index = 9;
    var choosedData_projection = this.data.choosedVeg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedVeg_projection: choosedData_projection
    });
  },

  onMovedFruit_0: function (e) {
    var index = 0;
    var choosedData_projection = this.data.choosedFruit_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedFruit_projection: choosedData_projection
    });
  },

  onMovedFruit_1: function (e) {
    var index = 1;
    var choosedData_projection = this.data.choosedFruit_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedFruit_projection: choosedData_projection
    });
  },

  onMovedFruit_2: function (e) {
    var index = 2;
    var choosedData_projection = this.data.choosedFruit_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedFruit_projection: choosedData_projection
    });
  },

  onMovedFruit_3: function (e) {
    var index = 3;
    var choosedData_projection = this.data.choosedFruit_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedFruit_projection: choosedData_projection
    });
  },

  onMovedFruit_4: function (e) {
    var index = 4;
    var choosedData_projection = this.data.choosedFruit_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedFruit_projection: choosedData_projection
    });
  },

  onMovedFruit_5: function (e) {
    var index = 5;
    var choosedData_projection = this.data.choosedFruit_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedFruit_projection: choosedData_projection
    });
  },

  onMovedFruit_6: function (e) {
    var index = 6;
    var choosedData_projection = this.data.choosedFruit_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedFruit_projection: choosedData_projection
    });
  },

  onMovedFruit_7: function (e) {
    var index = 7;
    var choosedData_projection = this.data.choosedFruit_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedFruit_projection: choosedData_projection
    });
  },

  onMovedFruit_8: function (e) {
    var index = 8;
    var choosedData_projection = this.data.choosedFruit_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedFruit_projection: choosedData_projection
    });
  },

  onMovedFruit_9: function (e) {
    var index = 9;
    var choosedData_projection = this.data.choosedFruit_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedFruit_projection: choosedData_projection
    });
  },

  onMovedMilk_0: function (e) {
    var index = 0;
    var choosedData_projection = this.data.choosedMilk_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMilk_projection: choosedData_projection
    });
  },

  onMovedMilk_1: function (e) {
    var index = 1;
    var choosedData_projection = this.data.choosedMilk_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMilk_projection: choosedData_projection
    });
  },

  onMovedMilk_2: function (e) {
    var index = 2;
    var choosedData_projection = this.data.choosedMilk_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMilk_projection: choosedData_projection
    });
  },

  onMovedMilk_3: function (e) {
    var index = 3;
    var choosedData_projection = this.data.choosedMilk_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMilk_projection: choosedData_projection
    });
  },

  onMovedMilk_4: function (e) {
    var index = 4;
    var choosedData_projection = this.data.choosedMilk_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMilk_projection: choosedData_projection
    });
  },

  onMovedMilk_5: function (e) {
    var index = 5;
    var choosedData_projection = this.data.choosedMilk_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMilk_projection: choosedData_projection
    });
  },

  onMovedMilk_6: function (e) {
    var index = 6;
    var choosedData_projection = this.data.choosedMilk_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMilk_projection: choosedData_projection
    });
  },

  onMovedMilk_7: function (e) {
    var index = 7;
    var choosedData_projection = this.data.choosedMilk_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMilk_projection: choosedData_projection
    });
  },

  onMovedMilk_8: function (e) {
    var index = 8;
    var choosedData_projection = this.data.choosedMilk_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMilk_projection: choosedData_projection
    });
  },

  onMovedMilk_9: function (e) {
    var index = 9;
    var choosedData_projection = this.data.choosedMilk_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMilk_projection: choosedData_projection
    });
  },

  onMovedMeatEgg_0: function (e) {
    var index = 0;
    var choosedData_projection = this.data.choosedMeatEgg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMeatEgg_projection: choosedData_projection
    });
  },

  onMovedMeatEgg_1: function (e) {
    var index = 1;
    var choosedData_projection = this.data.choosedMeatEgg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMeatEgg_projection: choosedData_projection
    });
  },

  onMovedMeatEgg_2: function (e) {
    var index = 2;
    var choosedData_projection = this.data.choosedMeatEgg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMeatEgg_projection: choosedData_projection
    });
  },

  onMovedMeatEgg_3: function (e) {
    var index = 3;
    var choosedData_projection = this.data.choosedMeatEgg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMeatEgg_projection: choosedData_projection
    });
  },

  onMovedMeatEgg_4: function (e) {
    var index = 4;
    var choosedData_projection = this.data.choosedMeatEgg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMeatEgg_projection: choosedData_projection
    });
  },

  onMovedMeatEgg_5: function (e) {
    var index = 5;
    var choosedData_projection = this.data.choosedMeatEgg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMeatEgg_projection: choosedData_projection
    });
  },

  onMovedMeatEgg_6: function (e) {
    var index = 6;
    var choosedData_projection = this.data.choosedMeatEgg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMeatEgg_projection: choosedData_projection
    });
  },

  onMovedMeatEgg_7: function (e) {
    var index = 7;
    var choosedData_projection = this.data.choosedMeatEgg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMeatEgg_projection: choosedData_projection
    });
  },

  onMovedMeatEgg_8: function (e) {
    var index = 8;
    var choosedData_projection = this.data.choosedMeatEgg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMeatEgg_projection: choosedData_projection
    });
  },

  onMovedMeatEgg_9: function (e) {
    var index = 9;
    var choosedData_projection = this.data.choosedMeatEgg_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedMeatEgg_projection: choosedData_projection
    });
  },

  onMovedGrease_0: function (e) {
    var index = 0;
    var choosedData_projection = this.data.choosedGrease_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedGrease_projection: choosedData_projection
    });
  },

  onMovedGrease_1: function (e) {
    var index = 1;
    var choosedData_projection = this.data.choosedGrease_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedGrease_projection: choosedData_projection
    });
  },

  onMovedGrease_2: function (e) {
    var index = 2;
    var choosedData_projection = this.data.choosedGrease_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedGrease_projection: choosedData_projection
    });
  },

  onMovedGrease_3: function (e) {
    var index = 3;
    var choosedData_projection = this.data.choosedGrease_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedGrease_projection: choosedData_projection
    });
  },

  onMovedGrease_4: function (e) {
    var index = 4;
    var choosedData_projection = this.data.choosedGrease_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedGrease_projection: choosedData_projection
    });
  },

  onMovedGrease_5: function (e) {
    var index = 5;
    var choosedData_projection = this.data.choosedGrease_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedGrease_projection: choosedData_projection
    });
  },

  onMovedGrease_6: function (e) {
    var index = 6;
    var choosedData_projection = this.data.choosedGrease_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedGrease_projection: choosedData_projection
    });
  },

  onMovedGrease_7: function (e) {
    var index = 7;
    var choosedData_projection = this.data.choosedGrease_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedGrease_projection: choosedData_projection
    });
  },

  onMovedGrease_8: function (e) {
    var index = 8;
    var choosedData_projection = this.data.choosedGrease_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedGrease_projection: choosedData_projection
    });
  },

  onMovedGrease_9: function (e) {
    var index = 9;
    var choosedData_projection = this.data.choosedGrease_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedGrease_projection: choosedData_projection
    });
  },

  onMovedNuts_0: function (e) {
    var index = 0;
    var choosedData_projection = this.data.choosedNuts_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedNuts_projection: choosedData_projection
    });
  },

  onMovedNuts_1: function (e) {
    var index = 1;
    var choosedData_projection = this.data.choosedNuts_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedNuts_projection: choosedData_projection
    });
  },

  onMovedNuts_2: function (e) {
    var index = 2;
    var choosedData_projection = this.data.choosedNuts_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedNuts_projection: choosedData_projection
    });
  },

  onMovedNuts_3: function (e) {
    var index = 3;
    var choosedData_projection = this.data.choosedNuts_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedNuts_projection: choosedData_projection
    });
  },

  onMovedNuts_4: function (e) {
    var index = 4;
    var choosedData_projection = this.data.choosedNuts_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedNuts_projection: choosedData_projection
    });
  },

  onMovedNuts_5: function (e) {
    var index = 5;
    var choosedData_projection = this.data.choosedNuts_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedNuts_projection: choosedData_projection
    });
  },

  onMovedNuts_6: function (e) {
    var index = 6;
    var choosedData_projection = this.data.choosedNuts_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedNuts_projection: choosedData_projection
    });
  },

  onMovedNuts_7: function (e) {
    var index = 7;
    var choosedData_projection = this.data.choosedNuts_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedNuts_projection: choosedData_projection
    });
  },

  onMovedNuts_8: function (e) {
    var index = 8;
    var choosedData_projection = this.data.choosedNuts_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedNuts_projection: choosedData_projection
    });
  },

  onMovedNuts_9: function (e) {
    var index = 9;
    var choosedData_projection = this.data.choosedNuts_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({
      choosedNuts_projection: choosedData_projection
    });
  },


  submitRecipe: function (e) {
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
    var s="";

    var choosedData = this.data.choosedCereal;
    var choosedData_projection = this.data.choosedCereal_projection;
    for (i = 0; i < choosedData_projection.length; i++) {
      if (choosedData_projection[i].y<150) s = "早"
      else if (choosedData_projection[i].y < 300) s = "中"
      else s = "晚";
      choosedData[choosedData_projection[i].projection].copyArray[choosedData_projection[i].projection_copy] = s;
    }
    this.setData({
      choosedCereal: choosedData
    })

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

    var choosedData = this.data.choosedFruit;
    var choosedData_projection = this.data.choosedFruit_projection;
    for (i = 0; i < choosedData_projection.length; i++) {
      if (choosedData_projection[i].y < 150) s = "早"
      else if (choosedData_projection[i].y < 300) s = "中"
      else s = "晚";
      choosedData[choosedData_projection[i].projection].copyArray[choosedData_projection[i].projection_copy] = s;
    }
    this.setData({
      choosedFruit: choosedData
    })

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

    var choosedData = this.data.choosedVeg;
    var choosedData_projection = this.data.choosedVeg_projection;
    for (i = 0; i < choosedData_projection.length; i++) {
      if (choosedData_projection[i].y < 150) s = "早"
      else if (choosedData_projection[i].y < 300) s = "中"
      else s = "晚";
      choosedData[choosedData_projection[i].projection].copyArray[choosedData_projection[i].projection_copy] = s;
    }
    this.setData({
      choosedVeg: choosedData
    })
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

    var choosedData = this.data.choosedMilk;
    var choosedData_projection = this.data.choosedMilk_projection;
    for (i = 0; i < choosedData_projection.length; i++) {
      if (choosedData_projection[i].y < 150) s = "早"
      else if (choosedData_projection[i].y < 300) s = "中"
      else s = "晚";
      choosedData[choosedData_projection[i].projection].copyArray[choosedData_projection[i].projection_copy] = s;
    }
    this.setData({
      choosedMilk: choosedData
    })
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

    var choosedData = this.data.choosedMeatEgg;
    var choosedData_projection = this.data.choosedMeatEgg_projection;
    for (i = 0; i < choosedData_projection.length; i++) {
      if (choosedData_projection[i].y < 150) s = "早"
      else if (choosedData_projection[i].y < 300) s = "中"
      else s = "晚";
      choosedData[choosedData_projection[i].projection].copyArray[choosedData_projection[i].projection_copy] = s;
    }
    this.setData({
      choosedMeatEgg: choosedData
    })
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

    var choosedData = this.data.choosedGrease;
    var choosedData_projection = this.data.choosedGrease_projection;
    for (i = 0; i < choosedData_projection.length; i++) {
      if (choosedData_projection[i].y < 150) s = "早"
      else if (choosedData_projection[i].y < 300) s = "中"
      else s = "晚";
      choosedData[choosedData_projection[i].projection].copyArray[choosedData_projection[i].projection_copy] = s;
    }
    this.setData({
      choosedGrease: choosedData
    })
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

    var choosedData = this.data.choosedNuts;
    var choosedData_projection = this.data.choosedNuts_projection;
    for (i = 0; i < choosedData_projection.length; i++) {
      if (choosedData_projection[i].y < 150) s = "早"
      else if (choosedData_projection[i].y < 300) s = "中"
      else s = "晚";
      choosedData[choosedData_projection[i].projection].copyArray[choosedData_projection[i].projection_copy] = s;
    }
    this.setData({
      choosedNuts: choosedData
    })
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

    console.log(choosedFood);

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
  onShow: function () {
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
  
  onChange(e) {
    console.log(e.detail)
  },
  onScale(e) {
    console.log(e.detail)
  }
})
var vegetable;
var fruit;
function getVegetablesDatas(){
  vegetable=[
    {
      id: '1',
      name: "大白菜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/cabbage.png"
    },
    {
      id: '2',
      name: "韭菜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/chives.jpg"
    },
    {
      id: '3',
      name: "芹菜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/qincai.jpeg"
    },
    {
      id: '4',
      name: "苦菜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/kucai.jpeg"
    },
    {
      id: '5',
      name: "茄子",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/eggplant.jpg"
    },
    {
      id: '6',
      name: "芥蓝菜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/jielan.jpeg"
    },
    {
      id: '7',
      name: "笕菜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/xiancai.jpeg"
    },
    {
      id: '8',
      name: "鲜蘑菇",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/mushroom.jpg"
    },
    {
      id: '9',
      name: "胡萝卜",
      weight: 200,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/carrot.jpg"
    },
    {
      id: '10',
      name: "倭瓜、南瓜",
      weight: 350,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/pumpkin.jpg"
    },
    {
      id: '11',
      name: "洋葱",
      weight: 250,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/onion.jpg"
    },
    {
      id: '12',
      name: "白萝卜",
      weight: 400,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/bailuobo.jpg"
    },
    {
      id: '13',
      name: "山药、荸荠、藕",
      weight: 150,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/yam.jpg"
    },
    {
      id: '14',
      name: "次菇",
      weight: 100,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/cigu.jpeg"
    },
    {
      id: '15',
      name: "毛豆、鲜豌豆",
      weight: 70,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/pea.jpg"
    },
    {
      id: '16',
      name: "圆白菜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/round-cabbage.jpg"
    },
    {
      id: '17',
      name: "葫芦、西红柿",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/tomato.jpg"
    },
    {
      id: '18',
      name: "花菜",
      weight: 350,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/cauliflower.jpg"
    },
    {
      id: '19',
      name: "冬笋",
      weight: 400,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/celtuce.png"
    },
    {
      id: '20',
      name: "芋头",
      weight: 100,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/yutou.jpeg"
    },
    {
      id: '21',
      name: "蒜苗",
      weight: 250,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/suanmiao.jpeg"
    },
    {
      id: '22',
      name: "丝瓜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/sigua.jpeg"
    },
    {
      id: '23',
      name: "菠菜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/bocai.jpeg"
    },
    {
      id: '24',
      name: "黄瓜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/cucumber.jpg"
    },
    {
      id: '25',
      name: "绿豆芽",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/lvdouya.jpeg"
    },
    {
      id: '26',
      name: "茴香",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/huixiang.jpg"
    },
    {
      id: '27',
      name: "扁豆",
      weight: 250,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/biandou.jpeg"
    },
    {
      id: '28',
      name: "冬瓜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/donggua.jpeg"
    },
    {
      id: '29',
      name: "油菜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/youcai.jpg"
    },
    {
      id: '30',
      name: "莴苣",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/woju.jpeg"
    },
    {
      id: '19',
      name: "茭白",
      weight: 400,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/cane-shoots.png"
    },
    {
      id: '20',
      name: "瓢菜",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/piaocai.jpeg"
    },
    {
      id: '21',
      name: "雪里蕻",
      weight: 500,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/xueligong.jpeg"
    },
    {
      id: '22',
      name: "百合",
      weight: 100,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/baihe.jpeg"
    },
    {
      id: '23',
      name: "青椒",
      weight: 400,
      protein: 5,
      water: 17,
      calorie: 90,
      url: "/images/food-images/vegetable/qingjiao.jpeg"
    },
  ];
  return vegetable;
}
function getFruitDatas(){
  fruit = [
    {
      id: '1',
      name: "香蕉",
      weight: 150,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/banana.jpg"
    },
    {
      id: '2',
      name: "梨（带皮)",
      weight: 200,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/pear.jpg"
    },
    {
      id: '3',
      name: "桔子、橙子",
      weight: 200,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/orange.jpg"
    },
    {
      id: '4',
      name: "猕猴桃（带皮）",
      weight: 200,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/kiwi.jpg"
    },
    {
      id: '5',
      name: "李子、杏",
      weight: 200,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/apricot.jpg"
    },
    {
      id: '6',
      name: "葡萄（带皮）",
      weight: 200,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/grape.jpg"
    },
    {
      id: '7',
      name: "草莓",
      weight: 300,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/strawberry.jpg"
    },
    {
      id: '8',
      name: "西瓜",
      weight: 500,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/watermelon.jpg"
    },
    {
      id: '9',
      name: "鲜荔枝",
      weight: 150,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/litchi.jpg"
    },
    {
      id: '10',
      name: "苹果（带皮)",
      weight: 200,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/apple.jpg"
    },
    {
      id: '11',
      name: "柚子",
      weight: 200,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/pomelo.jpg"
    },
    {
      id: '12',
      name: "柿",
      weight: 150,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/persimmon.png"
    },
    {
      id: '13',
      name: "桃（带皮)",
      weight: 200,
      protein: 1,
      water: 21,
      calorie: 90,
      url: "/images/food-images/fruit/peach.jpg"
    },
  ];
  return fruit;
}
function searchFruit(name){
  var length = fruit.length;
  for (var i = 0; i < length; i++) {
    if (fruit[i].name == name) {
      return fruit[i];
    }
  }
  return null;
}
function searchVeg(name){
  var length = vegetable.length;
  for (var i = 0; i < length; i++) {
    if (vegetable[i].name == name) {
      return vegetable[i];
    }
  }
  return null;
}
module.exports={
  getVegetablesDatas:  getVegetablesDatas,
  getFruitDatas: getFruitDatas,
  searchFruit:searchFruit,
  searchVeg:searchVeg
}
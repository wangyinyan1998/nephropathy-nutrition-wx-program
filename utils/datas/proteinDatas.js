//获取大豆数据
var soybean;
var meatEgg;
var milk;

//获取肉蛋类数据
function getMeatEggs(){
  meatEgg = [
    {
      id: '1',
      name: '熟火腿、香肠',
      weight: 20,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/sausages.png"
    },
    {
      id: '2',
      name: '半肥半瘦猪肉',
      weight: 25,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/pork.png"
    },
    {
      id: '3',
      name: '熟叉烧肉（无糖）',
      weight: 35,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/chashao.jpg"
    },
    {
      id: '4',
      name: '瘦猪、牛、羊肉',
      weight: 20,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/meat.png"
    },
    {
      id: '5',
      name: '带骨排骨',
      weight: 50,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/paigu.jpeg"
    },
    {
      id: '6',
      name: '鸭肉',
      weight: 50,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/duck.jpeg"
    },
    {
      id: '7',
      name: '草鱼',
      weight: 80,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/caoyu.jpeg"
    },
    {
      id: '8',
      name: '兔肉',
      weight: 100,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/turou.jpeg"
    },
    {
      id: '9',
      name: '熟酱牛肉',
      weight: 35,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/shujiangniurou.jpeg"
    },
    {
      id: '10',
      name: '鸡蛋粉',
      weight: 15,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/jidanfen.jpeg"
    },
    {
      id: '11',
      name: '鸡蛋（一个带壳）',
      weight: 60,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/egg.jpg"
    },
    {
      id: '12',
      name: '鸭蛋（一个带壳）',
      weight: 60,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/yadan.jpeg"
    },
    {
      id: '13',
      name: '鹌鹑蛋（六个带壳）',
      weight: 60,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/quail-eggs.png"
    },
    {
      id: '14',
      name: '鸡蛋清',
      weight: 150,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/egg-white.png"
    },
    {
      id: '15',
      name: '带鱼',
      weight: 80,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/daiyu.jpg"
    },
    {
      id: '16',
      name: '鹅肉',
      weight: 50,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/erou.jpeg"
    },
    {
      id: '17',
      name: '大黄鱼、鳝鱼',
      weight:100,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/shanyu.jpeg"
    },
    {
      id: '18',
      name: '虾、清虾',
      weight: 100,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/xia.jpg"
    },
    {
      id: '19',
      name: '蟹肉',
      weight: 100,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/xierou.jpg"
    },
    {
      id: '20',
      name: '水浸海参',
      weight: 350,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/haishen.jpeg"
    },
    {
      id: '21',
      name: '午餐肉',
      weight: 35,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/wucanrou.jpeg"
    },
    {
      id: '22',
      name: '黑鲢',
      weight: 100,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/heilian.jpeg"
    },
    {
      id: '23',
      name: '熟酱鸭',
      weight: 35,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/jiangya.jpeg"
    },
    {
      id: '24',
      name: '鲤鱼',
      weight: 80,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/liyu.jpeg"
    },
    {
      id: '25',
      name: '鲜贝',
      weight: 100,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/xianbei.jpg"
    },
    {
      id: '26',
      name: '鲫鱼',
      weight: 100,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/jiyu.jpeg"
    },
    {
      id: '27',
      name: '水浸鱿鱼',
      weight: 100,
      protein: 9,
      fat: 6,
      calorie: 90,
      url: "/images/food-images/meatEggs/youyu.jpg"
    },
  ];
  return meatEgg; 
}
//获取奶制品数据
function getMilk(){
  milk = [
    {
      id: '1',
      name: '奶粉',
      weight: 20,
      protein: 5,
      fat: 5,
      water:6,
      calorie: 90,
      url: "/images/food-images/milk/naifen.jpeg"
    },
    {
      id: '2',
      name: '脱脂奶粉',
      weight: 20,
      protein: 5,
      fat: 5,
      water: 6,
      calorie: 90,
      url: "/images/food-images/milk/tuozhi.jpeg"
    },
    {
      id: '3',
      name: '奶酪',
      weight: 25,
      protein: 5,
      fat: 5,
      water: 6,
      calorie: 90,
      url: "/images/food-images/milk/chesse.jpeg"
    },
    {
      id: '4',
      name: '牛奶',
      weight: 160,
      protein: 5,
      fat: 5,
      water: 6,
      calorie: 90,
      url: "/images/food-images/milk/milk.jpeg"
    },
    {
      id: '5',
      name: '羊奶',
      weight: 160,
      protein: 5,
      fat: 5,
      water: 6,
      calorie: 90,
      url: "/images/food-images/milk/yangnai.jpeg"
    },
    {
      id: '6',
      name: '无糖酸奶',
      weight: 130,
      protein: 5,
      fat: 5,
      water: 6,
      calorie: 90,
      url: "/images/food-images/milk/wutangsuannai.jpeg"
    }
  ];
  return milk;
}
function searchMilk(name){
  var length = milk.length;
  for (var i = 0; i < length; i++) {
    if (milk[i].name == name) {
      return milk[i];
    }
  }
  return null;
}
function searchMeatEgg(name){
  var length = meatEgg.length;
  for (var i = 0; i < length; i++) {
    if (meatEgg[i].name == name) {
      return meatEgg[i];
    }
  }
  return null;
}
module.exports = {
  getMeatEggs: getMeatEggs,
  getMilk: getMilk,
  searchMilk:searchMilk,
  searchMeatEgg:searchMeatEgg
}
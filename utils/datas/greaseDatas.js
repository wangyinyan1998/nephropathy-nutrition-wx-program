var grease;
function getGrease(){
  grease=[
    {
      id: '1',
      name: '花生油（1汤勺）',
      weight: 10,
      protein: 0,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/grease/peanut-oil.jpeg"
    },
    {
      id: '2',
      name: '玉米油（1汤勺）',
      weight: 10,
      protein: 0,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/grease/corn-oil.jpeg"
    },
    {
      id: '3',
      name: '豆油（1汤勺）',
      weight: 10,
      protein: 0,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/grease/soy-oil.jpeg"
    },
    {
      id: '4',
      name: '橄榄油（1汤勺）',
      weight: 10,
      protein: 0,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/grease/ganlanyou.jpeg"
    },
    {
      id: '5',
      name: '香油（1汤勺）',
      weight: 10,
      protein: 0,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/grease/balm.jpeg"
    },
    {
      id: '6',
      name: '菜籽油（1汤勺）',
      weight: 10,
      protein: 0,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/grease/caizi.jpeg"
    },
    {
      id: '7',
      name: '猪油（1汤勺）',
      weight: 10,
      protein: 0,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/grease/zhuyou.jpeg"
    },
    {
      id: '8',
      name: '牛油（1汤勺）',
      weight: 10,
      protein: 0,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/grease/niuyou.jpeg"
    },
    {
      id: '9',
      name: '羊油（1汤勺）',
      weight: 10,
      protein: 0,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/grease/yangyou.jpg"
    },
    {
      id: '10',
      name: '黄油（1汤勺）',
      weight: 10,
      protein: 0,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/grease/huangyou.jpg"
    },
    {
      id: '11',
      name: '葵花籽油（1汤勺）',
      weight: 25,
      protein: 0,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/grease/kuihuazi.jpeg"
    },
  ];
  return grease;
}
function search(name){
  var length = grease.length;
  for (var i = 0; i < length; i++) {
    if (grease[i].name == name) {
      return grease[i];
    }
  }
  return null;
}
module.exports={
  getGrease: getGrease,
  search:search
}

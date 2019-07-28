var cereals;
function search(name){
  var length = cereals.length;
  for(var i=0;i<length;i++){
    if(cereals[i].name == name){
      return cereals[i];
    }
  }
  return null;
}
function cerealDatas(){
  cereals=[
    {
      id:'1',
      name: "大米、小米",
      weight: 25,
      protein:2,
      water:20,
      calorie:90,
      url:"/images/food-images/cereal/rice.jpeg"
    },
    {
      id: '2',
      name: "绿豆、红豆",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/beans.jpg"
    },
    {
      id: '3',
      name: "高粱米、玉米渣",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/husked-gaoliang.jpg"
    },
    {
      id: '4',
      name: "玉米面",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/maize-flour.jpg"
    },
    {
      id: '5',
      name: "混合面",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/hunhemian.jpeg"
    },
    {
      id: '6',
      name: "燕麦片、荞麦面",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/oat-meal.jpg"
    },
    {
      id: '7',
      name: "各种挂面、龙须面",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/dried-noodles.jpg"
    },
    {
      id: '8',
      name: "马铃薯",
      weight: 100,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/potato.jpg"
    },
    {
      id: '9',
      name: "干粉条、干莲子",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/dry-vermicelli.jpg"
    },
    {
      id: '10',
      name: "油条、油饼",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/youtiao.jpg"
    },
    {
      id: '11',
      name: "烧饼、烙饼、馒头",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/shaobing.jpeg"
    },
    {
      id: '12',
      name: "咸面包",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/bread.png"
    },
    {
      id: '13',
      name: "磨芋生面条",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/moyumian.jpeg"
    },
    {
      id: '14',
      name: "鲜玉米",
      weight: 100,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/corn.jpg"
    },
    {
      id: '15',
      name: "干豌豆",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/pea.jpg"
    },
    {
      id: '16',
      name: "糯米",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/sticky-rice.jpeg"
    },
    {
      id: '17',
      name: "苏打饼",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/biscuit.jpeg"
    },
    {
      id: '18',
      name: "生面条",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/raw-noodles.jpg"
    },
    {
      id: '19',
      name: "面粉",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/flour.jpg"
    },
    {
      id: '20',
      name: "窝窝头",
      weight: 25,
      protein: 2,
      water: 20,
      calorie: 90,
      url: "/images/food-images/cereal/wowotou.jpeg"
    },
  ];
  return cereals;
}
module.exports={
  cerealDatas: cerealDatas,
  search:search
  
}
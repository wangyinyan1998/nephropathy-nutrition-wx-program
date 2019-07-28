var nuts;
function search(name) {
  var length = nuts.length;
  for (var i = 0; i < length; i++) {
    if (nuts[i].name == name) {
      return nuts[i];
    }
  }
  return null;
}
function getNutsDatas(){
  nuts = [
    {
      id: '1',
      name: "核桃仁",
      weight: 15,
      fat:10,
      calorie: 90,
      url: "/images/food-images/nuts/walnut.jpeg"
    },
    {
      id: '2',
      name: "杏仁",
      weight: 15,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/nuts/almond.png"
    },
    {
      id: '3',
      name: '花生米',
      weight: 15,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/nuts/peanut.jpg"
    },
    {
      id: '4',
      name: '西瓜子（带壳）',
      weight: 40,
      protein: 0,
      fat: 10,
      calorie: 90,
      url: "/images/food-images/nuts/xiguazi.jpeg"
    },
  ];
  return nuts;
}
module.exports = {
  getNuts:getNutsDatas,
  searchNuts:search
}
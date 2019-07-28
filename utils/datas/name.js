var name;

function getName() {
  var name = [
    { id: 1, name: "火腿", meal: [20, 33, 35, 66, 76, 77, 80,] },
    { id: 2, name: "香肠", meal: [102] },
    { id: 3, name: "猪肉", meal: [45, 54, 67, 68,89,90,91] },
    { id: 4, name: "叉烧肉", meal: [] },
    { id: 5, name: "午餐肉", meal: [] },
    { id: 6, name: "瘦猪肉", meal: [] },
    { id: 7, name: "牛肉", meal: [98,99,100] },
    { id: 8, name: "羊肉", meal: [97] },
    { id: 9, name: "排骨", meal: [83,] },
    { id: 10, name: "鸭肉", meal: [92,93] },
    { id: 11, name: "草鱼", meal: [42, 48, 72, 78, 82,] },
    { id: 12, name: "鲤鱼", meal: [103] },
    { id: 13, name: "甲鱼", meal: [94,95,96] },
    { id: 14, name: "比目鱼", meal: [] },
    { id: 15, name: "兔肉", meal: [104] },
    { id: 16, name: "酱牛肉", meal: [101] },
    { id: 17, name: "酱鸭", meal: [] },
    { id: 18, name: "鸭蛋", meal: [70,] },
    { id: 19, name: "松花蛋", meal: [] },
    { id: 20, name: "鹌鹑蛋", meal: [] },
    { id: 21, name: "鸡蛋清", meal: [6, 72, 77,] },
    { id: 22, name: "带鱼", meal: [47, 49,] },
    { id: 23, name: "鹅肉", meal: [] },
    { id: 24, name: "大黄鱼", meal: [73, 77,] },
    { id: 25, name: "鳝鱼", meal: [105] },
    { id: 26, name: "黑鲢", meal: [] },
    { id: 27, name: "鲫鱼", meal: [45, 50, 76, 79, 80,] },
    { id: 28, name: "虾", meal: [3, 4, 5, 6, 7, 10, 20, 32, 35, 43, 46, 51, 64,] },
    { id: 29, name: "鲜贝", meal: [] },
    { id: 30, name: "蟹肉", meal: [] },
    { id: 31, name: "鱿鱼", meal: [54,] },
    { id: 32, name: "海参", meal: [23, 35, 56,] },
  ]
  /*var name = [{
      id: 1,
      name: "大米",
      meal: [1, 52, 54, 56, 57, 58, 59, 60]
    },
    {
      id: 2,
      name: "猪油",
      meal: [2, 14, 17, 20]
    },
    {
      id: 3,
      name: "茄子",
      meal: [82]
    },
    {
      id: 4,
      name: "胡萝卜",
      meal: [4, 87]
    },
    {
      id: 5,
      name: "虾",
      meal: [3, 4, 5, 6, 7, 10, 20, 32, 35, 43, 46, 51]
    },
    {
      id: 6,
      name: "荔枝",
      meal: [6]
    }, 
    {
      id: 7,
      name: "鲜虾",
      meal: [4, 6, 51],
    },
    {
      id: 8,
      name: "鸡蛋清",
      meal: [6, 72, 77]
    },
    {
      id: 9,
      name: "鸡蛋",
      meal: [7, 10, 12, 20, 24, 25, 30, 43, 49, 50, 88]
    },
    {
      id: 10,
      name: "白萝卜",
      meal: [79]
    },
    {
      id: 11,
      name: "山药",
      meal: [9, 12, 27, 37, 75, 81]
    },
    {
      id: 12,
      name: "蒜苗",
      meal: [9, 65]
    },
    {
      id: 13,
      name: "玉米",
      meal: [12, 39, 40, 59]
    },
    {
      id: 14,
      name: "面粉",
      meal: [12, 15, 49]
    },
    {
      id: 15,
      name: "糯米",
      meal: [17]
    },
    {
      id: 16,
      name: "熟火腿",
      meal: [20, 76]
    },
    {
      id: 17,
      name: "丝瓜",
      meal: [7, 26, 71]
    },
    {
      id: 18,
      name: "豆腐",
      meal: [15, 16, 27, 41, 42, 44, 45, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]
    },
    {
      id: 19,
      name: "莲子",
      meal: [28, 29]
    },
    {
      id: 20,
      name: "百合",
      meal: [29]
    },
    {
      id: 21,
      name: "豆粉",
      meal: [32]
    },
    {
      id: 22,
      name: "海参",
      meal: [23, 35, 56]
    },
    {
      id: 23,
      name: "冬笋",
      meal: [35, 40, 77]
    },
    {
      id: 24,
      name: "火腿",
      meal: [20, 33, 35, 66, 76, 77, 80]
    },
    {
      id: 25,
      name: "腐竹",
      meal: [39, 57]
    },
    {
      id: 26,
      name: "豌豆",
      meal: [25, 40]
    },
    {
      id: 27,
      name: "牛奶",
      meal: [80]
    },
    {
      id: 28,
      name: "北豆腐",
      meal: [41]
    },
    {
      id: 29,
      name: "草鱼",
      meal: [42, 48, 72, 78, 82]
    },
    {
      id: 30,
      name: "鲫鱼",
      meal: [45, 50, 76, 79, 80]
    },
    {
      id: 31,
      name: "蒜",
      meal: [3, 9, 45, 65]
    },
    {
      id: 32,
      name: "鲜蘑菇",
      meal: [46, 84]
    },
    {
      id: 33,
      name: "带鱼",
      meal: [47, 49]
    },
    {
      id: 34,
      name: "菠菜",
      meal: [48]
    },
    {
      id: 35,
      name: "韭菜",
      meal: [56]
    },
    {
      id: 36,
      name: "芹菜",
      meal: [72, 87]
    },
    {
      id: 37,
      name: "大黄鱼",
      meal: [73, 77]
    },
  ]*/
  return name;
}
module.exports = {
  getName: getName
}
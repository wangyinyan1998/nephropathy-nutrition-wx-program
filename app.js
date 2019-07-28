//app.js
import wxValidate from '/utils/wx-validate/WxValidate.js'
App({
  wxValidate: (rules, messages) => new wxValidate(rules, messages),
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs); 
  },
  globalData: {
    userInfo: null,
    encryptedData: null,
    iv: null,
    openid: null,
    code: null,
    userHealth: null,
    canLookMeal:[],
    /*{
         genderIndex:0,
          weight:0,
          height:0,
          isBlack:0,
          proteinuriaIndex:0,
          kidneyIndex:0,
          ifDiabetesIndex:0,
          serumCreatinine:0,
          bloodAlbumin:0,
          age:0,
        }*/
    meaus: []
  },
})
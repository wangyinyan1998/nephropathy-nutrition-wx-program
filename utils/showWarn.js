function showWarn(s){
  wx.showToast({
    title: s,
    image: '/pages/image/warn_light.png',
    duration: 2000
  });
}
module.exports = {
  showWarn: showWarn
}
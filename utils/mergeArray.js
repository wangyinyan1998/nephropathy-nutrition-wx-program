//将arr1与arr2合并在一起，并将重复的删掉
function mergeArray(arr1, arr2) {
  var arr = new Array();
  for (var i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
  }
  for (var i = 0; i < arr2.length; i++) {
    var flag = true;
    for (var j = 0; j < arr1.length; j++) {
      if (arr2[i] == arr1[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      arr.push(arr2[i]);
    }
  }
  return arr;
}
module.exports = {
  mergeArray: mergeArray
}

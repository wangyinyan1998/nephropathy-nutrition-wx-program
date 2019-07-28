function deleteItem(array,i){
  var length = array.length;
  var newArray = [];
  for (var k = 0; k < i; k++) {
    newArray[k] = array[k];
  }
  for (i = i; i < length - 1; i++) {
    newArray[i] = array[i + 1];
  }
  return newArray;

}
module.exports = {
  deleteItem:deleteItem

}
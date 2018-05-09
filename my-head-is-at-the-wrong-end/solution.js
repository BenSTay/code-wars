function fixTheMeerkat(arr) {
  let newArr = [];
  arr.forEach(function(part) {
    newArr.unshift(part);
  });
  return newArr;
 }
 
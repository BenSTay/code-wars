var replaceDots = function(str) {
  let newStr = str;
  while (newStr.includes('.')) {
    newStr = newStr.replace('.', '-');
  }
  return newStr;
}
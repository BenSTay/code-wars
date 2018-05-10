function insertDash(num) {
  let numArr = num.toString().split('');
  let returnStr = '';
  let prevIsOdd = false;
  numArr.forEach(function(digit){
    if (parseInt(digit) % 2 > 0) {
      if (prevIsOdd) {
        returnStr += '-';
      }
      prevIsOdd = true;
    } else prevIsOdd = false;
    returnStr += digit;
  });
  return returnStr;
}

function isNice(arr){
  let nice = arr.length > 1;
  if (nice) {
    arr.forEach((num, i, arr) => {
      if (!arr.includes(num+1) && !arr.includes(num-1)) {
        nice = false;
      }
    })
  }
  return nice;
}

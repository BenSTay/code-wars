function cubeOdd(arr) {
  if (arr.filter(item => typeof(item) === 'string').length > 0) {
    return undefined
  }
  return arr.filter(num => num % 2 !== 0).map(num => num*num*num).reduce((acc, cur) => acc+cur, 0);
}

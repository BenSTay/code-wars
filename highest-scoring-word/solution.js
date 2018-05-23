function high(x){
  if (!x.match(/\w+/g)) { return x }
  return x.match(/\w+/g).map(word => {
    return [word, word.split('').map(char => char.charCodeAt() - 96).reduce((acc, cur) => acc + cur)]
  }).sort((a, b) => b[1] - a[1])[0][0]
}

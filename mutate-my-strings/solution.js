function mutateMyStrings(stringOne, stringTwo){
  let strings = [];
  for (let i = 0; i <= stringOne.length; i++){
    strings.push(`${stringTwo.substring(0,i)}${stringOne.substring(i)}\n`);
  }
  return strings.filter((string,index,array) => string !== array[index-1]).reduce((acc, cur) => acc+cur)
}

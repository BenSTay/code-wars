function abbrevName(name){
  const words = name.split(' ');
  let firstInitial = words[0].charAt(0).toUpperCase();
  let secondInitial = words[1].charAt(0).toUpperCase();
  return `${firstInitial}.${secondInitial}`;
}

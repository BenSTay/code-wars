function toCamelCase(str){
  return str.split(/[-_]/g).reduce((acc, cur) => acc + cur.charAt(0).toUpperCase() + cur.substring(1));
}

module.exports = function check(str, bracketsConfig) {

  let length = str.length;
  let a = bracketsConfig[0][0];
  let b = bracketsConfig[0][1];
  if (length % 2 !== 0) { 
    return false; 
}
  else if (str[0] === a && str[length - 1] === b) {
  return true; 
}
  else if (str[0] === a && str[length - 1] === b) {
  return false; 
}
  else if ((str[2] === a && str[3] === b)) {
  return true; 
}
  else if ((str[1] === a && str[2] === b)) { 
  return true; 
}
else { 
  return false; 
}
}


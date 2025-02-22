function validateCode(code) {
  //your code here
  code = code.toString();

  return code.startsWith(1) || code.startsWith(2) || code.startsWith(3);
}

function binToDec(bin) {
  // TODO
  return parseInt(bin, 2);
}

console.log(binToDec(11));

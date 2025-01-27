const power = (x, n) => {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
};

console.log(power(2, 6));

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, 6));

function isLochNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  //look for the words tree fiddy three fifty $3.50
  if (
    s.includes('tree fiddy') ||
    s.includes('three fifty') ||
    s.includes('$3.50')
  ) {
    return true;
  }
  //if I find return true is the Loch ness monster else it is false
  return false;
}

//console.log(
//  isLochNessMonster(
//    'Your girlscout cookies are ready to ship. Your total comes to tree fiddy'
//  )
//);

//console.log(
//  isLochNessMonster(
//    'I will be at the office by 3:50 or maybe a bit earlier, but definitely not before 3, to discuss with 50 clients'
//  )
//);

function array(string) {
  // TODO
  //if the string is empty return null
  if (string.length === 0) {
    return null;
  }
  //Split the string into an array
  let str = string.split(',');
  //remove first and last numbers
  str.shift();
  str.pop();
  //separate the array of spaces
  if (str.length === 0) {
    return null;
  }
  return str.join(' ');
}

console.log(array('1,2,3'));
console.log(array('1,2,3,4,5'));
console.log(array('1'));

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
  //if I find return true is the Loch ness monster else it is false
}

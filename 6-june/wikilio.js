function presses(phrase) {
  // To do...
  //initialise a variable to keep count of the key presses
  let keyTracker = 0;
  //create a dictionary to map the keypad
  let keypad = {
    1: 1,
    '.': 1,
    ',': 2,
    '?': 3,
    '!': 4,
    '*': 1,
    '#': 1,
    A: 1,
    B: 2,
    C: 3,
    2: 4,
    D: 1,
    E: 2,
    F: 3,
    3: 4,
    G: 1,
    H: 2,
    I: 3,
    4: 4,
    J: 1,
    K: 2,
    L: 3,
    5: 4,
    M: 1,
    N: 2,
    O: 3,
    6: 4,
    P: 1,
    Q: 2,
    R: 3,
    S: 4,
    7: 5,
    T: 1,
    U: 2,
    V: 3,
    8: 4,
    W: 1,
    X: 2,
    Y: 3,
    Z: 4,
    9: 5,
    ' ': 1,
    0: 2,
  };
  //loop over the string and add to the key tracker variable
  phrase
    .toUpperCase()
    .split('')
    .forEach((p) => {
      //add to my variable that keeps count
      keyTracker += keypad[p];
    });

  //return that number
  return keyTracker;
}

console.log(presses('LOL'));
console.log(presses('we'));
console.log(presses('0123456789'));
console.log(presses('01234*#56789'));
console.log(presses('HOW R U'));

function movie(card, ticket, perc) {
  // your code
}

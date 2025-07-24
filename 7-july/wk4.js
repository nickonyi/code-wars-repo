function reverse(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

function seven(m) {
  let steps = 0;

  while (m >= 100) {
    let lastDigit = m % 10;
    let rest = Math.floor(m / 10);
    m = rest - lastDigit * 2;
    steps++;
  }

  return [m, steps];
}

//we are looking if all rotations of the string is included in the array

function containAllRots(strng, arr) {
  // your code
  //define the rotation checker
  //loop through the array
  //check
}

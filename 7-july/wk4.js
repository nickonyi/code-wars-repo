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
  //define an array
  let rotations = [];
  //get all the rotations of the strng and add it  into an array
  for (let i = 0; i < strng.length; i++) {
    strng = strng.slice(-1) + strng.slice(0, -1);
    rotations.push(strng);
  }
  //check if what we have in  a rotation is what we have in an array
  //then return true if we have all the rotations and false if we don't
  return rotations.every((item) => arr.includes(item));
}

console.log(
  containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
);

///given an array of numbers with a being 26 and z 1 find the character equivalent
function switcher(x) {
  //loop over the array
  //find its number equivalent
  const mapping = { 27: "!", 28: "?", 29: " " };

  const letters = x
    .map((c) => {
      if (c >= 1 && c <= 26) {
        return String.fromCharCode(27 - c + 96);
      } else {
        return mapping[c];
      }
    })
    .join("");
  return letters;
}

console.log(
  switcher([
    "25",
    "7",
    "8",
    "4",
    "14",
    "23",
    "8",
    "25",
    "23",
    "29",
    "16",
    "16",
    "4",
  ])
);

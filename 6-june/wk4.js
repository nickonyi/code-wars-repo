function race(v1, v2, g) {
  if (v1 >= v2) return null;

  const time = g / (v2 - v1);

  let hours = Math.floor(time);

  let minutes = Math.floor((time * 60) % 60);

  let seconds = Math.floor((time * 3600) % 60);

  return [hours, minutes, seconds];
}
function solve(s) {
  //..
  //define variables for the different categories
  let cap = 0;
  let small = 0;
  let specialChars = 0;
  let nums = 0;
  //loop over my string
  for (let i = 0; i < s.length; i++) {
    //count the number of capital letters,small letters and special characters and add them to final out
    let code = s[i].charCodeAt(0);
    if (code >= 65 && code <= 90) {
      cap++;
    } else if (code >= 97 && code <= 122) {
      small++;
    } else if (code >= 48 && code <= 57) {
      nums++;
    } else {
      specialChars++;
    }
  }
  //return the final output
  return [cap, small, nums, specialChars];
}

//refactoring of the code

const solveRefactor = (x) => {
  const u = (x.match(/[A-Z]/g) || []).length;
  const l = (x.match(/[a-z]/g) || []).length;
  const n = (x.match(/[0-9]/g) || []).length;
  const s = (x.match(/[^A-Z0-9]/gi) || []).length;

  return [u, l, n, s];
};
console.log(solve('aAbBcC'));
console.log(solveRefactor('aAbBcC'));

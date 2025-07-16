function sumDigPow(a, b) {
  // Your code here
}

function vaporcode(string) {
  //jooin if there are spaces
  let newString = string.split("");
  //turn to upppercase
  newString = newString.map((char) => char.toUpperCase());
  //add the spaces
  newString = newString.filter((char) => char !== " ");
  //join the characters with two spaces
  const result = newString.join("  ");
  //return the string
  return result;
}

console.log(vaporcode("Lets go to the movies")); // "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
//old code
function menFromBoysOld(arr) {
  //your code here
  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  let men = even.sort((a, b) => a - b);
  let boys = odd.sort((a, b) => b - a);
  men = [...new Set(men)];
  boys = [...new Set(boys)];
  return [...men, ...boys];
}

//refactored code
const menFromBoys = (arr) => {
  arr = Array.from(new Set(arr));
  const even = arr.filter((a) => a % 2 === 0).sort((a, b) => a - b);
  const odd = arr.filter((a) => a % 2).sort((a, b) => b - a);
  return even.concat(odd);
};

//console.log(menFromBoys([1, 2, 3, 3, 4, 5, 6, 7, 8]));

function overTheRoad(address, n) {
  //code here
}

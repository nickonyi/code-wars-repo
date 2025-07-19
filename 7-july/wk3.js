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

function overTheRoadOld(address, n) {
  //code here
  let arr = [];
  for (let i = 1; i <= n * 2; i++) {
    arr.push(i);
  }
  //create an array of even and odd numbers
  const odd = arr.filter((a) => a % 2).sort((a, b) => b - a);
  const even = arr.filter((a) => a % 2 === 0);

  //reverse the odd numbers
  //given a number obtain its index and use it to retreve the number from the opposit side
  if (address % 2 == 0) {
    return odd[even.indexOf(address)];
  } else {
    return even[odd.indexOf(address)];
  }
}

///refactored
const overTheRoad = (address, n) => {
  return 2 * n + 1 - address;
};

console.log(overTheRoad(23633656673, 310027696726));

function vowel2index(str) {
  //code me
  //create an array of vowels
  const vowels = "aeiouAEIOU";
  //turn the string to an array
  const strArr = str.split("");
  //looks if the character in the array is a vowel and then replace it with the postion
  const result = strArr
    .map((c, i) => {
      return vowels.includes(c) ? (i + 1).toString() : c;
    })
    .join("");

  //return the new strng
  return result;
}

console.log(vowel2index("this is my strihcjdhcjdhcjsng"));

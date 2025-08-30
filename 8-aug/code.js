//takes in a number and returns true if plural is needded
//any number greater than one means plural is requiered

function plural(n) {
  // returns false if the number is = 1
  return n == 1 ? false : true;
}

console.log(plural(0.5));

//a function that removes values from the first array that are contained in the second array

const remove = (integer_list, values_list) => {
  //loop over the first array
  //check if the value is contained in the secon array
  //return a new array that excludes the values we have in the second array
  return integer_list.filter((item) => !values_list.includes(item));
};

console.log(remove([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]));

//return the difference between the largest and smallest value in an array
function maxDiff(list) {
  //if the list is empty or has one item return 0
  if (list.length <= 1) return 0;
  //find the smallest item in the array
  const min = Math.min(...list);
  //find the largest item in the array
  const max = Math.max(...list);
  //return the difference
  return max - min;
}

//function that accepts a string and a key and returns an array of numbers representing the encoded string
function encode(str, n) {
  //define an arrayto hold the converted strin
  let strN = [];
  //loop through every character in the string
  for (let i = 0; i < str.length; i++) {
    //for each letter in the array turn into its number equilavent

    const num = Number(str[i].charCodeAt(0)) - 96;
    strN.push(num);
  }
  //add the key to my new number array
  let key = String(n)
    .split("")
    .map((i) => Number(i));
  //compare the key and the str to make sure they are the same length
  let i = 0;
  while (key.length < strN.length) {
    key.push(key[i % key.length]);
    i++;
  }

  const encoded = strN.map((num, i) => num + key[i]);

  //return the encoded array
  return encoded;
}
//encode refacyored
const encodeRe = (str, n) => {
  let key = n.toString();
  return str
    .split("")
    .map((char, i) => char.charCodeAt(0) - 96 + +key[i % key.length]);
};
console.log(encodeRe("scout", 1939));
function foldTo(distance) {
  if (distance < 0 || !Number.isInteger(distance)) return null;
  let paperThickness = 0.0001;
  let fold = 0;
  while (paperThickness < distance) {
    paperThickness *= 2;
    fold++;
  }
  return fold;
}

function partlist(arr) {
  // your code
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    let left = arr.slice(0, i).join(" ");
    let right = arr.slice(i).join(" ");
    result.push([left, right]);
  }
  return result;
}
//sort the string of words on the basis of the lasrt letter in a word
function last(x) {
  //take the string and turn into an array of words
  const arr = x.split(" ");
  //reverse each item on the array
  const reverse = arr.map((x) => x.split("").reverse().join(""));
  //sort and then the whole array
  const sort = reverse.sort((a, b) => {
    let firstA = a[0].toLowerCase();
    let firstB = b[0].toLowerCase();
    return firstA.localeCompare(firstB);
  });
  //reverse it back
  const words = sort.map((x) => x.split("").reverse().join(""));
  //return the new array
  return words;
}

//last refactored
const lastRe = (x) => {
  return x
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

console.log(lastRe("man i need a taxi up to ubud"));

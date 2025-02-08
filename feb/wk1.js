function solve(s) {
  //split the string based on vowels
  let consonants = s.split(/[aeiou]/).filter(Boolean);
  //so for every substring I want to give their alfabet an equivalent Number
  let consonantNumbers = letterToNumbers(consonants);
  //add every substring and put their sum in an array
  let consonantSum = sumArray(consonantNumbers);
  //return the substring with the highest Sum
  return Math.max(...consonantSum);
}

const letterToNumbers = (arr) => {
  return arr.map((word) => {
    return word.split('').map((char) => char.charCodeAt(0) - 96);
  });
};

const sumArray = (arr) => {
  return arr.map((word) => {
    return word.reduce((acc, num) => acc + num, 0);
  });
};

console.log(
  solve(
    'aooaooihbuwuoibieauanqriorixtyubieujlasiamjgeauraroieeduaiiaaijjoubaxaoqgnoieauzeaioeumieuijcoeleoeiguiihaaaaabudwckqoifsaexbeggxlwdahioyuyueairaaraqzbfwqglkhfiyauu'
  )
);

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  // your code
  let predictedAge = [age1, age2, age3, age4, age5, age6, age7, age8];
  let predictedAgeDoubled = predictedAge.map((num) => num * num);

  const sumAge = predictedAgeDoubled.reduce((acc, num) => acc + num, 0);
  return Math.floor(Math.sqrt(sumAge) / 2);
}

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  // TODO
  if (name === 'Santa Claus' && password === 'Ho Ho Ho!') {
    return true;
  }

  return false;
};

let sleight = new Sleigh();

function repeatStr(n, s) {
  return s.repeat(n);
}

function sumCubes(n) {
  // ...
  const cubes = [];

  for (let i = 1; i <= n; i++) {
    cubes.push(i ** 3);
  }

  return cubes.reduce((prev, curr) => prev + curr, 0);
}

function sortGiftCode(code) {
  //TODO
  return code.split('').sort().join('');
}

function isPalindrome(x) {
  // your code here
  const palindrome = x.toLowerCase().split('').reverse().join('');

  return x.toLowerCase() === palindrome;
}

function digits(n) {
  // TODO
  //convert the number to a string
  const numString = String(n);

  return numString.split('').length;
}

console.log(digits(923344));

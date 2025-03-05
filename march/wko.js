//I am wriiting a function that converts vowels to numbers
//and another function to convert numbers to vowels

const vowels = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

const numbers = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function encode(string) {
  //convert into an array of individual letters
  let stringArr = string.split('');
  //loop over the array and replace the vowels with number
  let arrVowl = stringArr.map((l) => {
    if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u') {
      return vowels[l];
    } else {
      return l;
    }
  });

  //Join the array back to a string
  return arrVowl.join('');
}

function decode(string) {
  //convert into an array of individual letters
  let stringArr = string.split('');
  //loop over the array and replace the vowels with number
  let arrVowl = stringArr.map((l) => {
    if (l === '1' || l === '2' || l === '3' || l === '4' || l === '5') {
      return numbers[l];
    } else {
      return l;
    }
  });

  //Join the array back to a string
  return arrVowl.join('');
}

console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(decode('h2ll4'));

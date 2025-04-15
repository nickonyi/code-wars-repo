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

function productFib(prod) {
  // ...
}

function sumMul(n, m) {
  //your idea here
  let arrSum = [];
  for (let i = 0; i < m; i++) {
    if (i % n == 0) {
      arrSum.push(i);
    }
  }
  return arrSum.length === 0 ? 'INVALID' : arrSum.reduce((a, b) => a + b, 0);
}

class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z'];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
  // ...
  const index =
    goose % players.length === 0
      ? players.length - 1
      : (goose % players.length) - 1;

  const player = players[index];
  return player.name;
}

console.log(duckDuckGoose(players, 28));

function capitalize(string, indices) {
  //define your final result variale
  let result = '';

  //loop through the string array
  for (let i = 0; i < string.length; i++) {
    //retrieve the character at the selected index
    //capitalize the string
    if (indices.includes(i)) {
      result += string[i].toUpperCase();
    } else result += string[i];
  }
  //return the new string
  return result;
}

//console.log(capitalize('abcdef', [1, 2, 5]));

function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let months = 0;
  let savings = 0;
  let oldPrice = startPriceOld;
  let newPrice = startPriceNew;
  let currentPercentLoss = percentLossByMonth;
  while (oldPrice + savings < newPrice) {
    months++;

    if (months % 2 == 0) {
      currentPercentLoss += 0.5;
    }

    oldPrice *= 1 - currentPercentLoss / 100;
    newPrice *= 1 - currentPercentLoss / 100;

    savings += savingperMonth;
  }
  return [months, Math.round(oldPrice + savings - newPrice)];
}

//console.log(nbMonths(2000, 8000, 1000, 1.5));

function alphabetWar(fight) {
  //turn the strng to a proper array
  const fightArr = fight.split('');

  //map the  different letters wth their powers
  const powerValues = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  //separate the participants from the left and right camps
  const leftSide = ['w', 'p', 'b', 's'];
  const rightSide = ['m', 'q', 'd', 'z'];
  const leftLetters = fightArr.filter((char) => leftSide.includes(char));
  const rightLetters = fightArr.filter((char) => rightSide.includes(char));

  const leftValues = leftLetters.map((letter) => powerValues[letter]);
  const rightValues = rightLetters.map((letter) => powerValues[letter]);

  ////add the total to see who wins the fight
  const leftSum = leftValues.reduce((a, b) => a + b, 0);
  const rightSum = rightValues.reduce((a, b) => a + b, 0);

  //return the apprpriate message between the ones who win the fight

  return leftSum > rightSum
    ? 'Left side wins!'
    : rightSum > leftSum
    ? 'Right side wins!,'
    : "Let's fight again!";
}

//console.log(alphabetWar('z'));

function nthSmallest(arr, pos) {
  //your code here
  const sortedArr = arr.sort((a, b) => a - b);

  return arr[pos - 1];
}

function min(arr, toReturn) {
  //
  if (arr.length === 0) return null;

  let min = arr[0];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }

  return toReturn === 'value' ? min : index;
}

//min refactored
function minRe(arr, toReturn) {
  return toReturn === 'value'
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

console.log(minRe([500, 250, 750, 5000, 1000, 230], 'value'));

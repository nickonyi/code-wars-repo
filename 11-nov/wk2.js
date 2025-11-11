//given a number I should return the greatest sequence of 5 consercutive digits
//input is a number
//output a number made of 5 digits that is supposed to be the greatest

function solution(digits) {
  //define my gretest digit counter
  let digitCounter = 0;
  //convert the input into a string
  const digitStr = String(digits);
  //loop over my string array in sliding window of 5 digits
  for (let i = 0; i <= digitStr.length - 5; i++) {
    let bigDigit = parseInt(digitStr.slice(i, i + 5));
    //if that number is greater than what I have in my digit counter that becomes my greatest digit
    if (bigDigit > digitCounter) {
      digitCounter = bigDigit;
    }
  }

  //return that digit
  return digitCounter;
}
//given the start and end numbers I should return the frequency of the numbers appearing
//input is a 2 numbers
//output an array of ten numbers representing the frequency of the numbers appearing
const paintLetterboxesOld = (start, end) => {
  // Your code here
  //define my results array
  let result = [];
  //loop to get all the numbers from start to end
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  //break down the array of numbers to get the individual numbers
  const allDigits = result
    .map((num) => num.toString().split("").map(Number))
    .flat();

  const intitial = {};
  for (let i = 0; i <= 9; i++) {
    intitial[i] = 0;
  }
  //create an object to represent frequency of the numbers
  const freq = allDigits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, intitial);
  //return the values into an array
  const values = Object.values(freq);
  return values;
};

//paint letter boxes refactored
const paintLetterboxes = (start, end) => {
  const frequencies = Array(10).fill(0);
  for (let num = start; num <= end; num++) {
    num
      .toString()
      .split("")
      .forEach((x) => frequencies[x]++);
  }
  return frequencies;
};

console.log(paintLetterboxes(125, 132));

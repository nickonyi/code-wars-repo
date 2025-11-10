//given a number I should return the greatest sequence of 5 consercutive digits
//input is a number
//output a number made of 5 digits that is supposed to be the greatest

function solution(digits) {
  //define my gretest digit counter
  let digitCounter = 0;
  //convert the input into a string
  const digitStr = String(digits);
  //loop over my string array in groups of 5 digits
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

console.log(solution(1234567898765));

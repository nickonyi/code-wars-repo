function evenNumbers(array, number) {
  //initialize an array on where to store my even number
  const evenNarr = [];
  ///looop through the array pushing the even numbers into the array initialized
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNarr.push(array[i]);
    }
  }
  //return the array according to the number received in the argument
  return evenNarr.slice(-number);
}

//console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

function solve(s) {
  //given a string I compre the number of lower case letters and uppercase letters
  //if lowercase letters is > uppper case letters turn the the upper case letters to lowe case
  //if the uppercase > lowercase turn the remaining lowercase letter to uppercase
  //if uppercase = lowercase letter the whole letters should be lowercase

  //count the small letters and capial letters
  let smallL = 0;
  let capitalL = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) {
      capitalL++;
    } else if (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) {
      smallL++;
    }
  }
  if (smallL > capitalL) {
    return s.toLowerCase();
  } else if (capitalL > smallL) {
    return s.toUpperCase();
  } else if (smallL === capitalL) {
    return s.toLowerCase();
  }
}

console.log(solve('CODe'));

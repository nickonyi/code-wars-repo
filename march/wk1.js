//input: I am given an input where numbers and letters are mixed up
//Output: I want to get numbers only in the order that the occur
function filterString(value) {
  //turn the string into an array of individual letters
  //looop over the array
  //convert some of the number input to type NUmber
  //remove any characters from the array that is not a number
  //convert the array into single string
  //convert it into a number
  const input = value.split('');

  let numbers = input.map((i) => Number(i));
  numbers = numbers.filter((i) => !isNaN(i));

  return Number(numbers.join(''));
}

//input:

console.log(filterString('tetet2jej3jje7jj8'));
console.log(filterString('aa1bb2cc3dd'));

console.log(typeof 1);

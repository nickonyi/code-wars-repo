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

function whatday(num) {
  // put your code here
  switch (num) {
    case 1:
      return 'Sunday';
    case 2:
      return 'Monday';
    case 3:
      return 'Tuesday';
    case 4:
      return 'Wednesday';
    case 5:
      return 'Thursday';
    case 6:
      return 'Friday';
    case 7:
      return 'Saturday';
    default:
      return 'Invalid input'; // Handling invalid numbers
  }
}

function enough(cap, on, wait) {
  // your code here
  if (cap - on >= wait) {
    return 0;
  }
  return on + wait - cap;
}

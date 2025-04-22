//we want to know the index of vowels
function vowelIndices(word) {
  //your code here
  //initialize an array
  const result = [];
  //convert to lowercase
  word = word.toLowerCase();
  //loop over the array
  for (let i = 0; i < word.length; i++) {
    //if I find a vowel I send it to my result
    if (
      word[i] === 'a' ||
      word[i] === 'e' ||
      word[i] === 'i' ||
      word[i] === 'o' ||
      word[i] === 'u' ||
      word[i] === 'y'
    ) {
      result.push(i + 1);
    }
  }
  return result;
}

function isSortedAndHow(array) {
  const isSorted = isSortedAscending(array)
    ? 'yes, ascending'
    : isSortedDescending(array)
    ? 'yes, descending'
    : 'no';
  return isSorted;
}

const isSortedAscending = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
};
const isSortedDescending = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) {
      return false;
    }
  }
  return true;
};

console.log(isSortedAndHow([4, 2, 30]));
console.log(isSortedDescending([4, 2, 30]));

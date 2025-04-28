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

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

function toNumberArray(stringarray) {
  return stringarray.map((c) => Number(c));
}

console.log(toNumberArray(['1.1', '2.2', '3.3']));

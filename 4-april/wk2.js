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

console.log(vowelIndices('supEr'));

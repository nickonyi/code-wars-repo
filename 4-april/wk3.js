function giveMeFive(obj) {
  //coding here
  const result = [];
  for (const key in obj) {
    if (key.length == 5) {
      result.push(key);
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
}

const orderedCount = function (text) {
  // count the occurrence of the characters
  const charCount = new Map();

  for (const char of text) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  return Array.from(charCount.entries());
};

console.log(orderedCount('233312'));

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
  const charCount = text.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(charCount);
};

console.log(orderedCount('233312'));

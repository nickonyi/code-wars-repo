function arrayDiff(a, b) {
  let newArr = a;
  for (let i = 0; i < b.length; i++) {
    newArr = newArr.filter((num) => num !== b[i]);
  }
  if (b.length === 0) {
    newArr = a.filter((num) => num !== 0);
  }

  return newArr;
}

function stray(numbers) {
  //sort the array
  const sortArr = numbers.sort((a, b) => a - b);
  //loop over the array
  for (let i = 0; i < sortArr.length; i++) {
    //find if the current digit is different from both neighbours
    if (sortArr[i] !== sortArr[i - 1] && sortArr[i] !== sortArr[i + 1]) {
      return sortArr[i];
    }
  }
}

//refactored

const strayRefactor = (numbers) => {
  const a = numbers.sort();

  if (a[0] != a[1]) {
    return a[0];
  }

  return a[a.length - 1];
};

console.log(strayRefactor([1, 1, 2]));
console.log(strayRefactor([2, 1, 1]));
console.log(strayRefactor([17, 17, 3, 17, 17, 17, 17]));

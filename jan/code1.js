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

function revrot(str, sz) {
  // your code
  //turn the input into an array
  const numArr = str.split('').map(Number);
  //cut the array into chunks of sz size
  const chunks = chunkArray(numArr, sz);
  //get the sum of every item in the array
  const arraySum = sumItem(chunks);
  //If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position.
  arraySum.map((item) => {
    if (item % 2 == 0) {
    }
  });
}

function chunkArray(arr, x) {
  let result = [];

  for (let i = 0; i < arr.length; i += x) {
    result.push(arr.slice(i, i + x));
  }

  if (result[result.length - 1].length < x) {
    result.pop();
    return result;
  }

  return result;
}

const sumItem = (array) => {
  let sumItem = [];
  array.forEach((item) => {
    sumItem.push(item.reduce((acc, currentNum) => acc + currentNum, 0));
  });
  return sumItem;
};
console.log(revrot('733049910872815764', 5));

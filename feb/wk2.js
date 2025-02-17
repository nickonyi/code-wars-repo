function isPowerOfTwo(n) {
  //.. should return true or false ..
  if (n <= 0) {
    return false;
  }

  if ((n & (n - 1)) === 0) {
    return true;
  }

  return false;
}

function comp(array1, array2) {
  //your code here
  //if any input is null return false
  if (array1 === null || array2 === null) {
    return false;
  }
  //Square items in the first array
  array1 = array1.map((num) => num * num);
  //then sort the first array
  array1 = array1.sort((a, b) => a - b);
  //sort the second array
  array2 = array2.sort((a, b) => a - b);
  //then compare if the numbers in both arrays arfffffde the same
  //If I find any number that xxxxxis different return false other wise if all the numbers are the same return true
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [122, 14641, 20736, 361, 25921, 361, 20736, 361];

function minSum(arr) {
  // your code here
  arr = arr.sort((a, b) => a - b);
  let sum = 0;
  let n = arr.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    sum += arr[i] * arr[n - 1 - i];
  }

  return sum;
}

console.log(minSum([5, 4, 2, 3]));
console.log(minSum([12, 6, 10, 26, 3, 24]));

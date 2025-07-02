function multiplyAll(arr) {
  return function mult(x) {
    return arr.map((i) => x * i);
  };
}

//function maxTriSum(numbers, size = 3) {
//  //your code here
//  const unique = [...new Set(numbers)];
//  console.log(unique);
//
//  const arrN = getCombinations(unique, size);
//  console.log(arrN);
//
//  let max = 0;
//  arrN.forEach((arr) => {
//    let sum = arr.reduce((a, b) => a + b, 0);
//    if (sum > max) {
//      max = sum;
//    }
//  });
//  return max;
//}
//
//function getCombinations(arr, size) {
//  const result = [];
//
//  function backtrack(start, current) {
//    if (current.length === size) {
//      result.push([...current]);
//      return;
//    }
//    for (let i = start; i < arr.length; i++) {
//      current.push(arr[i]);
//      backtrack(i + 1, current);
//      current.pop();
//    }
//  }
//
//  backtrack(0, []);
//  return result;
//}

function maxTriSum(numbers) {
  const unique = [...new Set(numbers)];
  console.log(unique);

  const sort = unique.sort((a, b) => a - b);
  console.log(sort);

  const slice = sort.slice(-3);
  console.log(slice);

  const sum = slice.reduce((a, b) => a + b);
  return sum;
}
console.log(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]));

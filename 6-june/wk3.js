function add(n) {
  return function (x) {
    return x + n;
  };
}

function chooseBestSum(t, k, ls) {
  const arrComb = getCombinations(ls, k);
  let totalMax = 0;

  arrComb.forEach((arr) => {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    if (sum <= t && sum > totalMax) {
      totalMax = sum;
    }
  });
  return totalMax ? totalMax : null;
}

function getCombinations(arr, size) {
  const result = [];

  function backtrack(start, current) {
    if (current.length === size) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
}

//let ts = [50, 55, 56, 57, 58];
let ts = [91, 74, 73, 85, 73, 81, 87];
//let ts = [50];
console.log(chooseBestSum(230, 3, ts));

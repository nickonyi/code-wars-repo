function multiplyAll(arr) {
  return function mult(x) {
    return arr.map((i) => x * i);
  };
}

function maxTriSum(numbers) {
  //your code here
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

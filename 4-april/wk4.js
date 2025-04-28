function toNumberArray(stringarray) {
  return stringarray.map((c) => Number(c));
}

console.log(toNumberArray(['1.1', '2.2', '3.3']));

function cubeOdd(arr) {
  let sum = 0;
  arr = arr.map((i) => i ** 3);
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return undefined;
    } else if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(cubeOdd(['a', 12, 9, 'z', 42]));
console.log(typeof 12);

//console.log(cubeOdd([1, 2, 3, 4]));
//console.log(cubeOdd([-3, -2, 2, 3]));
//console.log(-27 % 2);

function upArray(arr) {
  if (
    !arr ||
    arr.length === 0 ||
    arr.some((d) => d < 0 || d > 9 || !Number.isInteger(d))
  ) {
    return null;
  }

  let originalStr = arr.join('');
  let number = BigInt(originalStr) + 1n;
  let resultStr = number.toString();

  // Pad with leading zeros if needed
  if (resultStr.length < arr.length) {
    resultStr = resultStr.padStart(arr.length, '0');
  }

  return resultStr.split('').map(Number);
}

//console.log(upArray([4, 3, 2, 5]));
console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
);
console.log([0, 7]);

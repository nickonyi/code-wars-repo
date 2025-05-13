function upArray(arr) {
  if (
    !arr ||
    arr.length === 0 ||
    arr.some((d) => d < 0 || d > 9 || !Number.isInteger(d))
  ) {
    return null; // Handle invalid input
  }

  let number = BigInt(arr.join(''));
  number += 1n;

  // Convert the result back to an array of Numbers (not BigInts)
  return number.toString().split('').map(Number);
}
//console.log(upArray([4, 3, 2, 5]));
console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
);
console.log([0, 7]);

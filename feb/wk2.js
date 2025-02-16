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

console.log(isPowerOfTwo(1048));

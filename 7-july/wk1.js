function multiplyAll(arr) {
  return function mult(x) {
    return arr.map((i) => x * i);
  };
}

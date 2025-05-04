Array.prototype.sum = function () {
  return this.reduce((acc, num) => acc + num, 0);
};

Array.prototype.cube = function () {
  return this.map((i) => i ** 3);
};
Array.prototype.square = function () {
  return this.map((i) => i ** 2);
};

Array.prototype.average = function () {
  if (this.length === 0) {
    return NaN;
  }
  return this.reduce((acc, num) => acc + num, 0) / this.length;
};
Array.prototype.even = function () {
  return this.filter((i) => i % 2 == 0);
};
Array.prototype.odd = function () {
  return this.filter((i) => i % 2 !== 0);
};

let numbers = [1, 2, 3, 4, 5];
const wod = [];
console.log(numbers.sum());
console.log(numbers.cube());
console.log(numbers.average());
console.log(numbers.even());
console.log(numbers.odd());

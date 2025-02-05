//sum all numbers in a for loop
const sumTo = (n) => {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
//sum all numbers using recursions

const sumToRec = (n) => {
  if (n == 1) {
    return 1;
  } else {
    return n + sumToRec(n - 1);
  }
};

const factorial = (n) => {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
};

//fibonnacci
const fib = (n) => {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};
console.log(sumToRec(100));
console.log(factorial(4));
console.log(fib(77));

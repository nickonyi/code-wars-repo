//input is the two numbers
//output is the coefficient multiplied by exponent minus 1 exponent

function derive(coefficient, exponent) {
  //multiply the coefficent and the exponent
  const multiplied = coefficient * exponent;
  //subtract one from the coefficent
  const newExp = exponent - 1;
  //return the required expression
  return `${multiplied}x^${newExp}`;
}

//givem an array of intergers find the product of K maximal numbers
function maxProduct(numbers, size) {
  //your code here
  //sort the array in decending order
  const decNumbers = numbers.sort((a, b) => b - a);
  //extract an array of the specified size
  const maxmalNumbers = decNumbers.slice(0, size);
  //multiply the numbers
  const product = maxmalNumbers.reduce((a, b) => a * b, 1);
  //return the product
  return product;
}

console.log(maxProduct([4, 3, 5], 2));

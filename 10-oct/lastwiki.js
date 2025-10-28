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

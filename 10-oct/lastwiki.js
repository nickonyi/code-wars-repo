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

//console.log(maxProduct([4, 3, 5], 2));
const rotateLeftOnce = (str) => {
  return str.slice(1) + str[0];
};

const progressiveRotations = (num, rotations) => {
  //convert the number into the array of digits
  let digits = num.toString().split("");
  //create an array to store the rottations
  for (let i = 0; i < digits.length - 1; i++) {
    //split the fixed part and the part to rotate
    let fixed = digits.slice(0, i);
    let rotating = digits.slice(i);
    rotating = rotateLeftOnce(rotating.join("")).split("");
    digits = [...fixed, ...rotating];
    rotations.push(parseInt(digits.join("")));
  }
  return rotations;
};

//given an interger return the maximum number you got from doing the rotation
function maxRot(n) {
  // your code
  //define an array to do my rotation
  let rotations = [n];
  //rotate the interggers while adding to the array
  rotations = progressiveRotations(n, rotations);
  console.log(rotations);

  //from the array find the maximum number
  const maxNumber = Math.max(...rotations);
  //return the number
  return maxNumber;
}

//input two arrays
//output is one array whereby all occurrence of the first list that are in the second list are removed
function arrayDiff(a, b) {
  //define my result array
  let result = [];
  //loop through the first array
  a.forEach((item) => {
    //check if the item exists in the second array
    //if not add the item to our end array
    if (!b.includes(item)) {
      result.push(item);
    }
  });

  //return the end array
  return result;
}

console.log(arrayDiff([1, 2, 2], [2]));

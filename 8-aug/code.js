//takes in a number and returns true if plural is needded
//any number greater than one means plural is requiered

function plural(n) {
  // returns false if the number is = 1
  return n == 1 ? false : true;
}

console.log(plural(0.5));

//a function that removes values from the first array that are contained in the second array

const remove = (integer_list, values_list) => {
  //loop over the first array
  //check if the value is contained in the secon array
  //return a new array that excludes the values we have in the second array
  return integer_list.filter((item) => !values_list.includes(item));
};

console.log(remove([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]));

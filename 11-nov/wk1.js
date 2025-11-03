//the input could be a string,an array, two arguments my goal is to return the last item
function last(...args) {
  if (args.length > 1) {
    return args[args.length - 1];
  }

  const value = args[0];
  if (typeof value === "string" || Array.isArray(value)) {
    return value[value.length - 1];
  }

  if (typeof value === "number") {
    const numArray = value.toString();
    if (numArray.length == 1) return parseInt(numArray);
    return numArray[numArray.length - 1];
  }

  return null;
}

//we want to shorten the routes of our travel
//input an array of objects
//an array that contains our locations highernated
function itinerary(travel) {
  // here your code
  //turn the objects into an array of items
  const locations = travel.flatMap((obj) => Object.values(obj));
  //remove the adjascent duplcates
  const destinations = locations.filter(
    (val, index, arr) => val !== arr[index - 1]
  );
  //return the new array with the locations
  return destinations.join("-");
}

//function that takes in a number and returns the number of steps required to return a palindrome
const palindromeChainLength = (n) => {
  //define the step variable

  //increament the variable for every step
  let reverse = parseInt(n.toString().split("").reverse().join(""));
  if (n === reverse) {
    return 0;
  }

  return 1 + palindromeChainLength(n + reverse);
};

console.log(palindromeChainLength(87));

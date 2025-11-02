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

function itinerary(travel) {
  // here your code
}

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

console.log(
  itinerary([
    { in: "TRN", out: "FCO" },
    { in: "FCO", out: "JFK" },
    { in: "JFK", out: "FCO" },
  ])
);

function parse(data) {
  //define a result array
  let result = [];
  //initialize our value in memory to zero
  let value = 0;
  //loop through our data array
  //do the different opperation has required
  data.split("").forEach((char) => {
    if (char === "i") {
      value++;
    } else if (char === "d") {
      value--;
    } else if (char === "s") {
      value = value ** 2;
    } else if (char === "o") {
      result.push(value);
    }
  });

  //return our results array
  return result;
}

console.log(parse("iiisdosodddddiso"));

function getMichaelLastName(inputText) {
  // your awesome code here
}

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

//input is a string containing michaels in them
//I should return an array containing the last name for michael
function getMichaelLastName(inputText) {
  // your awesome code here
  //define my results array
  let results = [];
  //split my string into an array
  const inputTextArr = inputText.split(/[^A-Za-z]+/).filter(Boolean);

  //If a string is equal to michael i only pick the next item if it starts with a capital letter
  //and add them to my results array
  for (let i = 0; i < inputTextArr.length; i++) {
    if (inputTextArr[i].toLowerCase() === "michael") {
      const next = inputTextArr[i + 1];

      if (next && /^[A-Z]/.test(next)) {
        results.push(next);
      }
    }
  }
  //return my results array
  return results;
}
const inputText =
  "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";
console.log(getMichaelLastName(inputText));

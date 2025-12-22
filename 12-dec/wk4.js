function evil(n) {
  //given a decimal number convert into binary
  //convert the binary into a string
  const binary = n.toString(2);

  //define a count variable
  let binaryCount = 0;
  //loop through the array and check the number of ones
  for (let i = 0; i < binary.length; i++) {
    if (parseInt(binary[i]) === 1) {
      binaryCount++;
    }
  }
  //determine if it is odious or evil

  if (binaryCount % 2 === 0) {
    return "It's Evil!";
  }
  return "It's Odious!";
}

console.log(evil(3));

function capitalize(string, indices) {
  //define your final result variale
  let result = '';

  //loop through the string array
  for (let i = 0; i < string.length; i++) {
    //retrieve the character at the selected index
    //capitalize the string
    if (indices.includes(i)) {
      result += string[i].toUpperCase();
    } else result += string[i];
  }
  //return the new string
  return result;
}

console.log(capitalize('abcdef', [1, 2, 5]));

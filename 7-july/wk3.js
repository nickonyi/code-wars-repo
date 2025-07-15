function sumDigPow(a, b) {
  // Your code here
}

function vaporcode(string) {
 //jooin if there are spaces
 let newString = string.split('');
  //turn to upppercase
  newString = newString.map(char => char.toUpperCase());
 //add the spaces
 newString = newString.filter(char => char !== ' ');
 //join the characters with two spaces
 const result = newString.join('  ');
 //return the string 
 return result;
}

console.log(vaporcode("Lets go to the movies")); // "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"

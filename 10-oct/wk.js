function uefaEuro2016(teams, scores) {
  // your code...
  if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  } else if (scores[0] < scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  } else {
    return `At match  ${teams[0]} - ${teams[1]}, teams played draw.`;
  }
}

//we get an a string and then we truncate into to two letters and return an array containaing the name and the truncated name
function whoIsPaying(name) {
  //your code here
  //define an end array
  let result = [];
  //if the name is 2 letters or less push only the name in the array
  if (name.length <= 2) {
    result.push(name);
  }
  //if not push the full name and the truncated letter
  else {
    result.push(name, name.slice(0, 2));
  }
  //return the result
  return result;
}

console.log(whoIsPaying("Mexico"));

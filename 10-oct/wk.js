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

function whoIsPaying(name) {
  //your code here
}

function race(v1, v2, g) {
  if (v1 >= v2) return null;

  const time = g / (v2 - v1);

  let hours = Math.floor(time);

  let minutes = Math.floor((time * 60) % 60);

  let seconds = Math.floor((time * 3600) % 60);

  return [hours, minutes, seconds];
}
function solve(s) {
  //..
}

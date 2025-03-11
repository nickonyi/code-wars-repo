function gps(s, x) {
  // your code
  if (x.length <= 1) {
    return 0;
  }

  let averageSperH = [];
  //go over the distace
  for (let i = 0; i < x.length - 1; i++) {
    let delta_distance = x[i + 1] - x[i];
    averageSperH.push((3600 * delta_distance) / s);
  }
  return Math.floor(Math.max(...averageSperH));
}

let x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];

console.log(gps(15, x));

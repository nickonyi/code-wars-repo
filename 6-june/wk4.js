function race(v1, v2, g) {
  if (v1 >= v2) return null;

  const time = g / (v2 - v1);

  let hours = Math.floor(time);

  let minutes = Math.floor((time * 60) % 60);

  let seconds = Math.floor((time * 3600) % 60);

  return [hours, minutes, seconds];
}

console.log(race(720, 850, 70));
console.log(race(720, 850, 37));
console.log(race(80, 91, 37));

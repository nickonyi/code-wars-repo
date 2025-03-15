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

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
};

function quote(fighter) {
  // your code here
  return fighter.toLowerCase() === 'conor mcgregor'
    ? "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    : 'I am not impressed by your performance.';
}

function all(arr, fun) {
  // ...
  if (arr.length < 1) return true;
  let xox = arr.filter((x) => fun(x));

  if (xox.length < 1) {
    return false;
  }
  return true;
}

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v < 9;
  })
);

function abbreviate(string) {
  // ...
  if (!string) {
    return '';
  }
  //separate the string in to indidual words if the strng has more than one word
  const words = string.match(/[A-Za-z]+|[^A-Za-z]+/g);
  const letters = /^[A-Za-z]+$/;

  //for each of the words if its length is > 4 gets its abbreviation otherwise maintain as it should
  const abb = words
    .map((w) => {
      if (letters.test(w) && w.length >= 4) {
        return w[0] + (w.length - 2) + w.slice(-1);
      } else {
        return w;
      }
    })
    .join('');
  return abb;
}

console.log(abbreviate('elephant-rides are really fun!'));
function lovefunc(flower1, flower2) {
  // moment of truth
}

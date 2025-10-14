//given an input of string I turn each character into an ascii code
// and then I join and return a singler number

function calc(x) {
  let number = "";
  for (let i = 0; i < x.length; i++) {
    number += x[i].charCodeAt(0);
  }
  const total1 = number;
  const total2 = total1
    .split("")
    .map((x) => (x === "7" ? "1" : x))
    .join("");
  const total1Sum = total1.split("").reduce((a, b) => a + Number(b), 0);
  const total2Sum = total2.split("").reduce((a, b) => a + Number(b), 0);
  return Math.abs(total2Sum - total1Sum);
}

console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));

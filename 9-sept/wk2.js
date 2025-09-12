//Given an array of stringed integers add up the non stringed intergers
//and subtract the total of nun stringed intergers
function divCon(x) {
  //divide the array between stringed and non stringed integer
  const NonS = x.filter((n) => typeof n === "number");
  const strN = x.filter((n) => typeof n !== "number").map(Number);
  //add them up
  const sumNos = NonS.reduce((a, b) => a + b, 0);
  const sumStrN = strN.reduce((a, b) => a + b, 0);
  //and then subtract
  return sumNos - sumStrN;
}

console.log(divCon([9, 3, "7", "3"]));

function catMouse(x) {}

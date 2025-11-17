const logicalOperation = (val1, val2, opp) => {
  switch (opp.toLowerCase()) {
    case "and":
      return val1 && val2;

    case "or":
      return val1 || val2;

    case "xor":
      // true only if exactly ONE of them is true
      return (val1 && !val2) || (!val1 && val2);

    default:
      throw new Error("Invalid operator. Use 'and', 'or', or 'xor'.");
  }
};

function logicalCalc(array, op) {
  //your code here
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result = logicalOperation(result, array[i], op);
  }
  return result;
}

console.log(logicalCalc([true, true, true, false], "AND"));

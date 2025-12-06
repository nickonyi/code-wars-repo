function problem(x) {
  //your code here
  if (typeof x === "string") {
    return "Error";
  }
  return x * 50 + 6;
}

//input is a string that starts with a number that contains arrow
//an input can start with a number an an asterisk to indicate how many numbers it has been pressed
//output should be a list of numbers
function decArrowPinCode(arrowStr) {
  //define my results array
  let results = [];
  //map the keypard into a data structure
  const keypad = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
  //create your moves instrunctions
  const moves = { "↑": [-1, 0], "↓": [1, 0], "←": [0, -1], "→": [0, 1] };
  //helper function to help you find the starting postion
  const findPosition = (num) => {
    for (let r = 0; r < keypad.length; r++) {
      for (let c = 0; c < keypad[r].length; c++) {
        if (keypad[r][c] === num) return [r, c];
      }
    }
    return null;
  };
  //tokenize the input into numbers, directions and repeats
  const tokens = arrowStr.match(/\d+|[*]\d+|[↑↓←→]/g);

  //start from the first number
  let current = Number(tokens[0]);

  if (current !== 0 && !current) return [];
  let [row, col] = findPosition(current);
  results.push(current);

  for (let i = 1; i < tokens.length; i++) {
    const token = tokens[i];

    //check if its a number
    if (/^\d+$/.test(token)) {
      current = Number(token);
      [row, col] = findPosition(current);
      results.push(current);
    } else if (/^[↑↓←→]$/.test(token)) {
      const [dr, dc] = moves[token];
      const newRow = row + dr;
      const newCol = col + dc;

      // return empty array immediately if out of bounds
      if (!keypad[newRow] || keypad[newRow][newCol] == null) {
        return [];
      }

      row = newRow;
      col = newCol;
      current = keypad[row][col];
      results.push(current);
    } else if (/^\*\d+$/.test(token)) {
      //repeat prvious key
      const repeats = Number(token[1]);
      console.log("repeats:", repeats);

      for (let j = 0; j < repeats; j++) {
        results.push(current);
      }
    }
  }
  //turn that array to a sequnce of numbers
  return results;
}

function solution(value) {
  //...
  return `Value is ${String(value).padStart(5, "0")}`;
}

function solve(s) {
  //loop the string and derive the vowels and put them into their own array
  let vowels = s.match(/[aeiou]+/g).map((item) => item.split(""));
  //return the array with more items
  const longest = vowels.reduce(
    (max, curr) => (curr.length > max ? curr.length : max),
    0
  );

  return longest;
}

function validateRace(moves) {}

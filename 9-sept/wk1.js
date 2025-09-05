const formatTime = (seconds) => {
  seconds = Math.trunc(seconds);
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = seconds % 60;
  return `${String(h).padStart(2, "0")}|${String(m).padStart(2, "0")}|${String(
    s
  ).padStart(2, "0")}`;
};

function stat(strg) {
  // your code
  //if the string is empty return an empty string
  if (strg === "") return "";
  //turn out string into a 2d array of seconds
  let arr = strg.split(",").map((i) => {
    let [h, m, s] = i.split("|").map(Number);
    return h * 3600 + m * 60 + s;
  });
  //console.log(arr);

  //find the range
  let range = Math.max(...arr) - Math.min(...arr);
  //console.log(range);

  //find the avarage
  let average = arr.reduce((a, b) => a + b, 0) / arr.length;
  //find the median value
  let median = 0;
  let sorted = [...arr].sort((a, b) => a - b);
  console.log(sorted);

  let mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    median = (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    median = sorted[mid];
  }
  console.log(median);

  //return a string containing that
  return `Range: ${formatTime(range)} Average: ${formatTime(
    average
  )} Median: ${formatTime(median)}`;
}
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17"));

//given an array of words return array of numbers of letters that occupy their number in the alphabet
function solve(arr) {
  //code
  //convert the whole array to lowercase
  arr = arr.map((word) => word.toLowerCase());
  //define my result array
  let result = [];

  //loop through each word in the array
  //and for each word compare the position of each letter in the array and their position in the alphabet
  //if the position match increase the count
  for (let i = 0; i < arr.length; i++) {
    //define a counter variable
    let counter = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (j === arr[i][j].charCodeAt(0) - 97) {
        counter++;
      }
    }
    result.push(counter);
  }
  return result;
  //return our result array
}

//console.log(solve(["abode", "ABc", "xyzD"]));

//return the count of consercutive two pairs
function pairs(ar) {
  //..
  //define a result array
  let result = [];
  //loop through the array and take groups of two consercutive items and push them to an array
  for (let i = 0; i < ar.length - 1; i += 2) {
    if (Math.abs(ar[i] - ar[i + 1]) === 1) {
      result.push([ar[i], ar[i + 1]]);
    }
  }

  //return the length of that array
  return result.length;
}

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5, 4]));

//return the sum of triangular numbers upto the nth number
function sumTriangularNumbers(n) {
  if(n<1) return 0;
  
  let series = [];
  let sum = 0;
  for (let i = 1; i <=n; i++) {
    sum = sum+i;
    series.push(sum)
    
  }
  return series.reduce((a,b)=>a+b,0);
}

console.log(sumTriangularNumbers(5));

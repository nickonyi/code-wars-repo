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

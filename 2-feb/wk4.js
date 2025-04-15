function highestRankOld(arr) {
  //Your Code logic should written here
  //Use an object to count the frequency of the numbers
  let frequency = {};

  arr.map((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  let maxCount = 0;
  let mostFrequentNumber = null;

  for (let num in frequency) {
    num = Number(num);
    if (
      frequency[num] > maxCount ||
      (frequency[num] === maxCount && num > mostFrequentNumber)
    ) {
      maxCount = frequency[num];
      mostFrequentNumber = num;
    }
  }

  return mostFrequentNumber;
}

//highset rank refactored
function highestRank(arr) {
  const freq = arr.reduce((a, b) => ((a[b] = ++a[b] || 1), a), {});

  let max = 0;
  let num = 0;

  for (const k in freq) {
    if (freq[k] >= max) {
      max = freq[k];
      num = Math.max(+k, num);
    }
  }

  return num;
}

console.log(highestRank([12, 10, 10, 8, 12, 7, 6, 4, 10, 12]));

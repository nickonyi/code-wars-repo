function mix(s1, s2) {
  // your code
  //convert the strings to lowercase letter and only have letters in every string
  let string1 = s1.replace(/[^a-z]/g, '');
  let string2 = s2.replace(/[^a-z]/g, '');
  //count the frequency of every letter

  let frequency1 = [...string1].reduce((frequency, char) => {
    frequency[char] = (frequency[char] || 0) + 1;
    return frequency;
  }, {});

  let frequency2 = [...string2].reduce((frequency, char) => {
    frequency[char] = (frequency[char] || 0) + 1;
    return frequency;
  }, {});

  //remove items that don't appear more that two times
  frequency1 = Object.fromEntries(
    Object.entries(frequency1).filter(([char, count]) => count >= 2)
  );
  frequency2 = Object.fromEntries(
    Object.entries(frequency2).filter(([char, count]) => count >= 2)
  );
  //compare the two objects and if s1 or s2 contains the maximum append appropriately
  const endResult = compareFrequencies(frequency1, frequency2);

  return endResult;
}

const compareFrequencies = (obj1, obj2) => {
  let result = [];

  //collect all unique letters from both object
  const letters = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  letters.forEach((letter) => {
    let count1 = obj1[letter] || 0;
    let count2 = obj2[letter] || 0;

    if (count1 > count2) {
      result.push(`1:${letter.repeat(count1)}`);
    } else if (count2 > count1) {
      result.push(`2:${letter.repeat(count2)}`);
    } else if (count1 === count2) {
      result.push(`=:${letter.repeat(count2)}`);
    }
  });

  return result
    .sort((a, b) => {
      let lenA = a.length - 2,
        lenB = b.length - 2;

      // Sort by descending length
      if (lenB !== lenA) return lenB - lenA;

      // Prioritize "1:" and "2:" over "=:"
      if (a[0] !== '=' && b[0] === '=') return -1;
      if (a[0] === '=' && b[0] !== '=') return 1;

      return a.localeCompare(b);
    })
    .join('/');
};

console.log(mix('Lords of the Fallen', 'gamekult'));

function addBinary(a, b) {
  return (a + b).toString(2);
}

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

function calculateTip(amount, rating) {
  const tip = {
    terrible: (0 * amount) / 100,
    poor: (5 * amount) / 100,
    good: (10 * amount) / 100,
    great: (15 * amount) / 100,
    excellent: (20 * amount) / 100,
  };

  return rating.toLowerCase() in tip
    ? Math.ceil(tip[rating.toLowerCase()])
    : 'Rating not recognised';
}

console.log(calculateTip(20, 'terrible'));
//console.log(calculateTip(26.95, 'good'));

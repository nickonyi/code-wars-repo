function dashatizee(num) {
  //turn the number into a sting array
  num = Math.abs(num);
  const numArr = String(num).split('');
  //traverse through the loop
  const dashedArr = numArr.map((n, i, arr) => {
    //if a number is odd add dash at the start and the end
    if (n % 2 !== 0) {
      if (arr.length === 1) {
        return n;
      } else if (i == 0) {
        return n + '-';
      } else if (i === arr.length - 1) {
        return '-' + n;
      }
      return '-' + n + '-';
    } else {
      return n;
    }
  });
  //join the array into a string and return
  return dashedArr.join('').replace(/--+/g, '-');
}

function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, '-$1-')
    .replace(/--+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function balancedNum(number) {
  //convert the number into a string array
  const numbStr = String(number);
  //extract the left numbers
  const left = splitAroundMiddle(numbStr).left.split('').map(Number);

  //extract the right numbers
  const right = splitAroundMiddle(numbStr).right.split('').map(Number);

  //add numbers to the left of the array
  const leftSum = left.reduce((acc, num) => acc + num, 0);

  //add numbers to the right of the middle element
  const rightSum = right.reduce((acc, num) => acc + num, 0);

  //compare the two if they are equal return balance otherwise they are unbalanced
  if (leftSum === rightSum) {
    return 'Balanced';
  }
  return 'Not balanced';
}

const splitAroundMiddle = (arr) => {
  const len = arr.length;
  const isEven = len % 2 == 0;
  if (isEven) {
    const mid1 = len / 2 - 1;
    const mid2 = len / 2;
    return {
      left: arr.slice(0, mid1),
      middle: arr.slice(mid1, mid2),
      right: arr.slice(mid2 + 1),
    };
  } else {
    const mid = Math.floor(len / 2);
    return {
      left: arr.slice(0, mid),
      middle: [arr[mid]],
      right: arr.slice(mid + 1),
    };
  }
};

function sortMyString(S) {
  // your code here
  //create an array to store even indexed characters
  const evenArr = [];
  //create an array to store odd indexed characters
  const oddArr = [];
  //loop trhrough the array and store the different indexed charactrers in their place
  for (let i = 0; i < S.length; i++) {
    if (i % 2 == 0) {
      evenArr.push(S[i]);
    } else {
      oddArr.push(S[i]);
    }
  }
  //return spaced  characters startng with even index and then odd index
  const result = [evenArr.join(''), oddArr.join('')].join(' ');

  return result;
}

Array.range = function (start, count) {
  return this.from({ length: count }, (_, i) => i + start);
};

Array.prototype.sum = function () {
  return this.reduce((acc, num) => acc + num, 0);
};

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    // for
    //while
    let sum = 0;
    let num = 0;
    let numString = '';
    while (num <= count) {
      sum += num;
      numString += num + '+';
      num++;
    }
    return count < 0
      ? `${count}<0`
      : count == 0
      ? numString.replace(/\+$/, '') + '=' + sum
      : numString.replace(/\+$/, '') + ' = ' + sum;
  };

  return SequenceSum;
})();

function adjacentElementsProduct(array) {
  //define a maxmum array
  //loop through the array
  //multiply two adjacent its and compare it to the maxmum variable
  //if it is the maximum set it as the maximum
  let max = array[0] * array[1];
  for (let i = 0; i < array.length; i++) {
    let element = array[i] * array[i + 1];
    if (element > max) {
      max = element;
    }
  }
  return max;
}

console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));

function automorphic(n) {
  //get the square of the number and store it in an array
  const numberS = String(n).split('');
  const square = n * n;
  //extract the last items of the square
  const lastDigit = String(square)
    .split('')
    .splice(-numberS.length)
    .map(Number)
    .join('');

  if (n == lastDigit) {
    return 'Automorphic';
  }

  return 'Not!!'; // your code here
}

console.log(automorphic(625));

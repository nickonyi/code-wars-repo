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

console.log(balancedNum(56239814));

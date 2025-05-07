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
  //find the middle number
  //add numbers to the left of the array
  //add numbers to the right of the middle element
  //compare the two if they are equal return balance otherwise they are unbalanced
}

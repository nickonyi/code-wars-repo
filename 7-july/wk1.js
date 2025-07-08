function multiplyAll(arr) {
  return function mult(x) {
    return arr.map((i) => x * i);
  };
}

//function maxTriSum(numbers, size = 3) {
//  //your code here
//  const unique = [...new Set(numbers)];
//  console.log(unique);
//
//  const arrN = getCombinations(unique, size);
//  console.log(arrN);
//
//  let max = 0;
//  arrN.forEach((arr) => {
//    let sum = arr.reduce((a, b) => a + b, 0);
//    if (sum > max) {
//      max = sum;
//    }
//  });
//  return max;
//}
//
//function getCombinations(arr, size) {
//  const result = [];
//
//  function backtrack(start, current) {
//    if (current.length === size) {
//      result.push([...current]);
//      return;
//    }
//    for (let i = start; i < arr.length; i++) {
//      current.push(arr[i]);
//      backtrack(i + 1, current);
//      current.pop();
//    }
//  }
//
//  backtrack(0, []);
//  return result;
//}

function maxTriSum(numbers) {
  const unique = [...new Set(numbers)];
  console.log(unique);

  const sort = unique.sort((a, b) => a - b);
  console.log(sort);

  const slice = sort.slice(-3);
  console.log(slice);

  const sum = slice.reduce((a, b) => a + b);
  return sum;
}
//console.log(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]));

const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  const result = [];
  if (begin > end) return 0;

  for (let i = begin; i <= end; i += step) {
    result.push(i);
  }

  return result.reduce((a, b) => a + b);
};
function boredom(staff) {
  // how bored are you ??
  //define an accumulator variable
  let accumulator = 0;
  //loop over the object and obtain the different departments
  for (const key in staff) {
    if (staff[key] === 'accounts') {
      accumulator += 1;
    } else if (staff[key] === 'finance') {
      accumulator += 2;
    } else if (staff[key] === 'canteen') {
      accumulator += 10;
    } else if (staff[key] === 'regulation') {
      accumulator += 3;
    } else if (staff[key] === 'trading') {
      accumulator += 6;
    } else if (staff[key] === 'change') {
      accumulator += 6;
    } else if (staff[key] === 'IS') {
      accumulator += 8;
    } else if (staff[key] === 'retail') {
      accumulator += 5;
    } else if (staff[key] === 'cleaning') {
      accumulator += 4;
    } else if (staff[key] === 'pissing about') {
      accumulator += 25;
    }
  }
  //return the total and return the correct sentiment based on the total
  if (accumulator <= 80) {
    return 'kill me now';
  } else if (accumulator < 100 && accumulator > 80) {
    return 'i can handle this';
  } else if (accumulator > 100) {
    return 'party time!!';
  }
}

console.log(
  boredom({
    tim: 'IS',
    jim: 'finance',
    randy: 'pissing about',
    sandy: 'cleaning',
    andy: 'cleaning',
    katie: 'cleaning',
    laura: 'pissing about',
    saajid: 'regulation',
    alex: 'regulation',
    john: 'accounts',
    mr: 'canteen',
  })
);

function upArray(arr) {
  // ...
  //combine the values of the array into a single digit

  let number = Number(arr.join(''));
  console.log(number);

  //add one to the single digit
  number = number + 1;
  //return the array of individual values

  return arr[0] == 0 ? [0, number] : String(number).split('').map(Number);
}

//console.log(upArray([4, 3, 2, 5]));
console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
);

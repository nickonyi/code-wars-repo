function evenNumbers(array, number) {
  //initialize an array on where to store my even number
  const evenNarr = [];
  ///looop through the array starting from the end of an array
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNarr.push(array[i]);
    }
  }
  return evenNarr;
  //return the array according to the number received in the argument
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

function toNumberArray(stringarray) {
  return stringarray.map((c) => Number(c));
}

function cubeOdd(arr) {
  let sum = 0;
  arr = arr.map((i) => i ** 3);
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return undefined;
    } else if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }

  return sum;
}

function sortArrays(arr1, arr2) {
  //coding and coding..
  //declare the two arrays where your are going to keep the new sorted array

  //sort and keeep track of the positions of where the number changed to

  let arrSort1 = sortWithPositions(arr2);
  let arrSort2 = sortWithPositions(arr1);

  //sort arr1 according to ascendin order of arr2
  let sortedArr1 = sortAccordingtoArr(arr1, arrSort1);
  //sort arr2 according to ascendin order of arr1
  let sortedArr2 = sortAccordingtoArr(arr2, arrSort2);

  return [sortedArr1, sortedArr2];
}

function sortWithPositions(arr) {
  //create an array of object
  const indexedArr = arr.map((value, index) => ({
    value,
    originalIndex: index,
  }));

  //sort based on value
  indexedArr.sort((a, b) => a.value - b.value);

  //return the array of new positions for the items that have been sorted
  const positionChanges = new Array(arr.length);
  indexedArr.forEach((item, newIndex) => {
    positionChanges[item.originalIndex] = newIndex;
  });

  return positionChanges;
}

function sortAccordingtoArr(arr, arrSort) {
  const original = [...arr];
  for (let i = 0; i < arrSort.length; i++) {
    arr[arrSort[i]] = original[i];
  }
  return arr;
}

//console.log(sortWithPositions([6, 5, 7, 8, 9]));
console.log(sortArrays([5, 4, 3, 2, 1], [6, 5, 7, 8, 9]));
//console.log(sortArrays([5, 6, 9, 2, 6, 5], [3, 6, 7, 4, 8, 1]));

let Ghost = function () {
  // your code goes here
  this.color = 'red' || 'white';
};

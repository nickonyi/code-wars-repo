console.log('mistakes');
function arrayDiff(a, b) {
    let newArr = a;
    for (let i = 0; i < b.length; i++) {
        newArr = newArr.filter(num => num!== b[i]);   
    }
    if (b.length === 0) {
        newArr = a.filter(num => num!== 0);
    }

  return newArr;
}


console.log(arrayDiff([1,2], [1]));
console.log(arrayDiff([1,2,2], []));
console.log(arrayDiff([1,2,3], [1,2]));



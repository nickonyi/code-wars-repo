//Given an array of stringed integers add up the non stringed intergers
//and subtract the total of nun stringed intergers
function divCon(x) {
  //divide the array between stringed and non stringed integer
  const NonS = x.filter((n) => typeof n === "number");
  const strN = x.filter((n) => typeof n !== "number").map(Number);
  //add them up
  const sumNos = NonS.reduce((a, b) => a + b, 0);
  const sumStrN = strN.reduce((a, b) => a + b, 0);
  //and then subtract
  return sumNos - sumStrN;
}

//console.log(divCon([9, 3, "7", "3"]));

function catMouse(x) {
  return x;
}

function arrayLeaders(numbers){
  //define a leader array
  let leaders = [];
  //loop through the array
  for (let i = 0; i < numbers.length; i++) {
    //obtain the item and the rest of the array
   let num = numbers[i];
     //add the items to its right
   let sumNumbersRight = numbers.slice(i+1).reduce((a,b)=> a+b,0)
     //compare if it is greater than the sum to its right add to the result array
   if (num > sumNumbersRight) {
     leaders.push(num)
   }
    
  }
  
  return leaders;
}

console.log(arrayLeaders([1,2,3,4,0]));

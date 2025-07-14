function sumDigPow(a, b) {
  // Your code here
}

function solve(arr){  
  //code
  //define a count variable
  let count = 0;
  //define the result array
  let result = [];
  //loop over the array and determine the positon of the strings relative to their alphabet position
  arr.forEach((word)=>{
    let wordStr = word.split('');
    wordStr.forEach((char,index)=>{
        if(index+1 === char.charCodeAt(0)){
            count++;
            result.push(code);
        }
    })
  })
  //count the letters that are in their relative position
  //return the result array
 return  result;
};
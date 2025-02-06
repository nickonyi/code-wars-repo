function solve(s) {
  //split the string based on vowels
  let consonants = s.split(/[aeiou]/).filter(Boolean);
  //so for every substring I want to give their alfabet an equivalent Number
  let consonantNumbers = letterToNumbers(consonants);
  //add every substring and put their sum in an array
  let consonantSum = sumArray(consonantNumbers);
  //return the substring with the highest Sum
  return Math.max(...consonantSum);
}

const letterToNumbers = (arr) => {
  return arr.map((word) => {
    return word.split('').map((char) => char.charCodeAt(0) - 96);
  });
};

const sumArray = (arr) => {
  return arr.map((word) => {
    return word.reduce((acc, num) => acc + num, 0);
  });
};

console.log(
  solve(
    'aooaooihbuwuoibieauanqriorixtyubieujlasiamjgeauraroieeduaiiaaijjoubaxaoqgnoieauzeaioeumieuijcoeleoeiguiihaaaaabudwckqoifsaexbeggxlwdahioyuyueairaaraqzbfwqglkhfiyauu'
  )
);

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  // your code
  let predictedAge = [age1, age2, age3, age4, age5, age6, age7, age8];
  let predictedAgeDoubled = predictedAge.map((num) => num * num);

  const sumAge = predictedAgeDoubled.reduce((acc, num) => acc + num, 0);
  return Math.floor(Math.sqrt(sumAge) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

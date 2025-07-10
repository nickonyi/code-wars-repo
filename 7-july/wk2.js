function capitalize(string, indices) {
  //define your final result variale
  let result = '';

  //loop through the string array
  for (let i = 0; i < string.length; i++) {
    //retrieve the character at the selected index
    //capitalize the string
    if (indices.includes(i)) {
      result += string[i].toUpperCase();
    } else result += string[i];
  }
  //return the new string
  return result;
}

//console.log(capitalize('abcdef', [1, 2, 5]));

function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let months = 0;
  let savings = 0;
  let oldPrice = startPriceOld;
  let newPrice = startPriceNew;
  let currentPercentLoss = percentLossByMonth;
  while (oldPrice + savings < newPrice) {
    months++;

    if (months % 2 == 0) {
      currentPercentLoss += 0.5;
    }

    oldPrice *= 1 - currentPercentLoss / 100;
    newPrice *= 1 - currentPercentLoss / 100;

    savings += savingperMonth;
  }
  return [months, Math.round(oldPrice + savings - newPrice)];
}

//console.log(nbMonths(2000, 8000, 1000, 1.5));

function alphabetWar(fight)
{
   return "Let's fight again!";
}

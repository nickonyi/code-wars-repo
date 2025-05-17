function upArray(arr) {
  if (
    !arr ||
    arr.length === 0 ||
    arr.some((d) => d < 0 || d > 9 || !Number.isInteger(d))
  ) {
    return null;
  }

  let originalStr = arr.join('');
  let number = BigInt(originalStr) + 1n;
  let resultStr = number.toString();

  // Pad with leading zeros if needed
  if (resultStr.length < arr.length) {
    resultStr = resultStr.padStart(arr.length, '0');
  }

  return resultStr.split('').map(Number);
}

function outed(meet, boss) {
  //loop over the object and collect the hapinness ratings
  let hapinness = [];
  for (const key in meet) {
    if (key === boss) {
      meet[key] *= 2;
    }
    hapinness.push(meet[key]);
  }
  //get the average hapiness ratngg
  const hapinnessRating =
    hapinness.reduce((a, b) => a + b, 0) / hapinness.length;

  //determine if you leave the room or not
  if (hapinnessRating <= 5) {
    return 'Get Out Now!';
  } else {
    return 'Nice Work Champ!';
  }
}

//console.log(
//  outed(
//    {
//      tim: 0,
//      jim: 2,
//      randy: 0,
//      sandy: 7,
//      andy: 0,
//      katie: 5,
//      laura: 1,
//      saajid: 2,
//      alex: 3,
//      john: 2,
//      mr: 0,
//    },
//    'laura'
//  )
//);

console.log(
  outed(
    {
      tim: 7,
      jim: 6,
      randy: 9,
      sandy: 1,
      andy: 1,
      katie: 2,
      laura: 3,
      saajid: 5,
      alex: 6,
      john: 8,
      mr: 8,
      doctot: 3,
    },
    'randy'
  )
);

function fuelPrice(litres, pricePerLitre) {
  // your code here
  // Good luck with it!
}

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

function outed(meet, boss) {}

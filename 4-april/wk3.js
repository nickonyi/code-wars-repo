function giveMeFive(obj) {
  //coding here
  const result = [];
  for (const key in obj) {
    if (key.length == 5) {
      result.push(key);
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
}

console.log(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' }));

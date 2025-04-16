//I am given a string of characters - input
//I am to return the sum of all characters - output
//the function should handle all asci pintable characters

function uniTotal(string) {
  // total up dem unicodes!
  const numstr = string.split('');
  //take individual characters and convert them to numbers
  const no = numstr.map((c) => c.charCodeAt(0));
  //then add them app
  const sum = no.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
//I am given  a string containing a and b c
//where I see a I put b and where I see b I put a
function switcheroo(x) {
  let input = x.split('');

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
      input[i] = 'b';
    } else if (input[i] === 'b') {
      input[i] = 'a';
    }
  }
  return input.join('');
}
function apple(x) {
  if (x ** 2 > 1000) {
    return "It's hotter than the sun!!";
  } else {
    return 'Help yourself to a honeycomb Yorkie for the glovebox.';
  }
}

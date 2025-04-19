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
let fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];

let initial_position = [0, 0];
let moves = ['up', 'left', 'right', 'left', 'left'];
let movess = ['up', 'up', 'up', 'up', 'up'];
let movesss = ['down', 'down', 'down', 'down', 'down'];
//function streetFighterSelection(fighters, position, moves) {
//  let selectedPlayers = [];
//  let rows = fighters.length;
//  let cols = fighters[0].length;
//  let path = [];
//
//  //based o the move convert them to coodinates
//  for (const move of moves) {
//    console.log(position);
//
//    switch (move) {
//      case 'up':
//        if (position[0] > 0) position[0]--;
//        break;
//      case 'down':
//        if (position[0] < rows - 1) position[0]++;
//        break;
//      case 'left':
//        position[1] = (position[1] - 1 + cols) % cols;
//        break;
//      case 'right':
//        position[1] = (position[1] + 1 + cols) % cols;
//        break;
//
//      default:
//        break;
//    }
//    path.push(position.slice());
//  }
//  //using the path navigate to every item in the fighters array
//
//  path.map((i) => selectedPlayers.push(fighters[i[0]][i[1]]));
//  return selectedPlayers;
//}

function streetFighterSelection(fighters, position, moves) {
  let result = [];
  moves.forEach((move) => {
    if (move === 'up') {
      position[0] = 0;
    } else if (move === 'down') {
      position[0] = 1;
    } else if (move === 'right') {
      position[1] = position[1] === 5 ? 0 : position[1] + 1;
    } else if (move === 'left') {
      position[1] = position[1] === 0 ? 5 : position[1] - 1;
    }

    result.push(fighters[position[0]][position[1]]);
  });
  return result;
}

console.log(streetFighterSelection(fighters, initial_position, moves));

function mxdiflg(a1, a2) {
  // your code
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
  let maxDiff = 0;

  a1.forEach((x) =>
    a2.forEach((y) => {
      const diff = Math.abs(x.length - y.length);
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    })
  );
  return maxDiff;
}

let a1 = [
  'hoqq',
  'bbllkw',
  'oox',
  'ejjuyyy',
  'plmiis',
  'xxxzgpsssa',
  'xxwwkktt',
  'znnnnfqknaz',
  'qqquuhii',
  'dvvvwz',
];
let a2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];
let a3 = [];

console.log(mxdiflg(a1, a3));

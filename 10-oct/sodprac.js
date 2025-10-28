const findEmpty = (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return null;
};

const isValid = (board, row, col, num) => {
  if (board[row].includes(num)) {
    return false;
  }

  for (let r = 0; r < 9; r++) {
    if (board[r][col] === num) {
      return false;
    }
  }

  const boxRowStart = Math.floor(row / 3) * 3;
  const boxColStart = Math.floor(col / 3) * 3;

  for (let r = boxRowStart; r < boxRowStart + 3; r++) {
    for (let c = boxColStart; c < boxColStart + 3; c++) {
      if (board[r][c] === num) {
        return false;
      }
    }
  }

  return true;
};

const solve = (board) => {
  const empty = findEmpty(board);
  if (!empty) {
    return true;
  }

  const [row, col] = empty;
  for (let num = 1; num <= 9; num++) {
    if (isValid(board, row, col, num)) {
      board[row][col] = num;
      if (solve(board)) return true;
      board[row][col] = 0;
    }
  }
  return false;
};

const sudoku = (puzzle) => {
  const newBoard = puzzle.map((row) => [...row]);
  if (solve(newBoard)) {
    return newBoard;
  }
  return null;
};

let puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

console.log(sudoku(puzzle));

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const ele = ['1','2','3','4','5','6','7','8','9'];
  const rest1 = [];
  const rest2 = [];
  const rest3 = [];

  for (let i = 0; i<9; ++i ) {
    let r = [...ele];
    for (let j = 0; j<9; ++j ) {
      let index = r.indexOf(board[i][j]);
      if (index >= 0) {
        r.splice(index, 1);
      }
    }
    rest1[i] = r;
  }

  for (let i = 0; i<9; ++i ) {
    let r = [...ele];
    for (let j = 0; j<9; ++j ) {
      let index = r.indexOf(board[j][i]);
      if (index >= 0) {
        r.splice(index, 1);
      }
    }
    rest2[i] = r;
  }

  for (let  x = 0; i<3; ++i ) {
    let r = [...ele];
    for (let i = 0; i < 3; ++i) {
      for (let j = 0; j < 3; ++j) {
        let index = r.indexOf(board[i][j]);
        if (index >= 0) {
          r.splice(index, 1);
        }
      }
    }
      rest3[i] = r;
  }

  console.log(rest1);
  console.log(rest2);
};

let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

console.log(solveSudoku(board));
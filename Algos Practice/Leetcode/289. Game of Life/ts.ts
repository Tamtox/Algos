/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  const newState: number[][] = [];
  for (let i = 0; i < board.length; i++) {
    newState.push([]);
    for (let j = 0; j < board[i].length; j++) {
      let count = 0;
      const rowLen = board[i].length;
      if (i > 0 && j > 0 && board[i - 1][j - 1] === 1) {
        count++;
      }
      if (i > 0 && board[i - 1][j] === 1) {
        count++;
      }
      if (i > 0 && j < rowLen - 1 && board[i - 1][j + 1] === 1) {
        count++;
      }
      if (j > 0 && board[i][j - 1] === 1) {
        count++;
      }
      if (j < rowLen - 1 && board[i][j + 1] === 1) {
        count++;
      }
      if (i < board.length - 1 && j > 0 && board[i + 1][j - 1] === 1) {
        count++;
      }
      if (i < board.length - 1 && board[i + 1][j] === 1) {
        count++;
      }
      if (i < board.length - 1 && j < rowLen - 1 && board[i + 1][j + 1] === 1) {
        count++;
      }
      if (board[i][j] === 1) {
        if (count < 2) {
          newState[i].push(0);
        } else if (count === 2 || count === 3) {
          newState[i].push(1);
        } else {
          newState[i].push(0);
        }
      } else {
        if (count === 3) {
          newState[i].push(1);
        } else {
          newState[i].push(0);
        }
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    board[i] = newState[i];
  }
}

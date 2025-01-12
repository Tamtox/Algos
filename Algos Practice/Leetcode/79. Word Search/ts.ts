function exist(board: string[][], word: string): boolean {
  let result = false;
  const dict = new Map<string, Map<string, string>>();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const char = board[i][j];
      const map = new Map<string, string>();
      dict.set(`${i}${j}`, map);
    }
  }
  return result;
}

const calculateSection = (row: number, col: number) => {
  let res = 0;
  if (row < 3) {
    if (col < 3) {
      res = 0;
    } else if (col < 6) {
      res = 1;
    } else {
      res = 2;
    }
  } else if (row < 6) {
    if (col < 3) {
      res = 3;
    } else if (col < 6) {
      res = 4;
    } else {
      res = 5;
    }
  } else if (row < 9) {
    if (col < 3) {
      res = 6;
    } else if (col < 6) {
      res = 7;
    } else {
      res = 8;
    }
  }
  return res;
};

function isValidSudoku(board: string[][]): boolean {
  if (board.length !== 9) return false;
  const cols: Set<string>[] = [];
  const rows: Set<string>[] = [];
  const sections: Set<string>[] = [];
  for (const row of board) {
    cols.push(new Set());
    sections.push(new Set());
  }
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    if (row.length !== 9) return false;
    rows.push(new Set());
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      if (item === ".") continue;
      if (rows[i].has(item)) return false;
      if (cols[j].has(item)) return false;
      const currentSection = calculateSection(i, j);
      if (sections[currentSection].has(item)) return false;
      rows[i].add(item);
      cols[j].add(item);
      sections[currentSection].add(item);
    }
  }
  return true;
}

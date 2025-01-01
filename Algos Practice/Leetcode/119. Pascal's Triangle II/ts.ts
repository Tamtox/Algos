function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  let prevRow = [1, 1];
  for (let i = 2; i <= rowIndex; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }
    row.push(1);
    prevRow = row;
  }
  return prevRow;
}

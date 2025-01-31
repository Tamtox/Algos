function convertToTitle(columnNumber: number): string {
  let result = "";
  while (columnNumber > 0) {
    const remainder = columnNumber % 26;
    if (columnNumber > 26) {
      columnNumber = Math.floor(columnNumber / 26);
    } else {
      columnNumber = 0;
    }
    if (remainder === 0) {
      result = `Z${result}`;
      columnNumber--;
    } else {
      result = `${String.fromCharCode(remainder + 64)}${result}`;
    }
  }
  return result;
}

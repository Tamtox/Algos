function convert(s: string, numRows: number): string {
  const rows: string[][] = [];
  let rowCount = numRows;
  let diagCount = 0;
  let mode: "cols" | "diagonal" = "cols";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (mode === "cols") {
      const row = rows[rowCount];
      if (!row) {
        rows.push([char]);
      } else {
        row.push(char);
      }
      rowCount++;
      if (rowCount === numRows) {
        mode = "diagonal";
      }
    } else {
    }
  }
  let result = "";
  for (const row of rows) {
    result += row.join("");
  }
  return result;
}

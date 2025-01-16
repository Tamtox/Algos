class NumMatrix {
  matrix: number[][];
  rowSums: number[][];
  constructor(matrix: number[][]) {
    this.matrix = matrix;
    const sums: number[][] = [];
    for (let i = 0; i < matrix.length; i++) {
      const sumRow: number[] = [];
      let sum = 0;
      for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
        sumRow.push(sum);
      }
      sums.push(sumRow);
    }
    this.rowSums = sums;
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let result = 0;
    for (let i = row1; i <= row2; i++) {
      if (col1 > 0) {
        result += this.rowSums[i][col2] - this.rowSums[i][col1 - 1];
      } else {
        result += this.rowSums[i][col2];
      }
    }
    return result;
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

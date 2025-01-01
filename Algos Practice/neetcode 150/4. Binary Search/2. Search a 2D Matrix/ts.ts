function searchRow(row:number[], target:number) {
  let left = 0;
  let right = row.length;
  if(row[left] === target || row[right] === target) return true;
  while(left <= right) {
    const mid = Math.ceil((right + left) / 2);
    if(target === row[mid]) {
      return true;
    } else if (target < row[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}


function searchMatrix(matrix: number[][], target: number): boolean {
  for(let row of matrix) {
    const first = row[0];
    if(target === first) return true;
    const last = row[row.length - 1];
    if(target === last) return true;
    if(target > first && target < last) {
      const res = searchRow(row, target);
      if(res) return res;
    }
  }
  return false;
};
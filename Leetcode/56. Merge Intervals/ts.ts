function merge(intervals: number[][]): number[][] {
  intervals = intervals.sort((x, y) => x[0] - y[0]);
  const result: number[][] = [];
  let index = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (result.length < 1) {
      result.push(intervals[i]);
    } else {
      const curr = intervals[i];
      const currResult = result[index];
      if (curr[0] <= currResult[1] || curr[0] <= currResult[0]) {
        currResult[0] = Math.min(currResult[0], curr[0]);
        currResult[1] = Math.max(currResult[1], curr[1]);
      } else {
        result.push(curr);
        index++;
      }
    }
  }
  return result;
}

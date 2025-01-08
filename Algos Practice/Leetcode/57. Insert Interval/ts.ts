function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length < 1) {
    return [newInterval];
  }
  let startIndex = -1;
  let endIndex = -1;
  if (startIndex === -1) {
    let left = 0;
    let right = intervals.length - 1;
    while (left <= right) {
      const mid = Math.floor((right + left) / 2);
      const item = intervals[mid];
      if (item[0] <= newInterval[0] && item[1] >= newInterval[0]) {
        if (item[1] >= newInterval[1]) {
          endIndex = mid;
        }
        startIndex = mid;
        break;
      }
      if (item[1] < newInterval[0]) {
        left = mid + 1;
        continue;
      }
      if (item[0] > newInterval[1]) {
        right = mid - 1;
        continue;
      }
    }
  }
}

function findPosition(intervals: number[][], target: number) {
  let left = 0;
  let right = intervals.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const item = intervals[mid];
    if (item[0] <= target && item[1] >= target) {
      return mid;
    } else if (target > item[1]) {
      if (intervals[mid + 1][0] > target) {
        return mid + 1;
      }
      left = mid + 1;
    } else {
      if (intervals[mid - 1][1] < target) {
        return mid;
      }
      right = mid - 1;
    }
  }
  return 0;
}

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const len = intervals.length;
  if (intervals.length < 1) {
    return [newInterval];
  }
  if (newInterval[1] <= intervals[0][0]) {
    if (newInterval[1] === intervals[0][0]) {
      intervals[0][0] = newInterval[0];
    } else {
      intervals.unshift(newInterval);
    }
    return intervals;
  }
  if (newInterval[0] >= intervals[len - 1][1]) {
    if (newInterval[0] === intervals[len - 1][1]) {
      intervals[len - 1][1] = newInterval[1];
    } else {
      intervals.push(newInterval);
    }
    return intervals;
  }
  let startIndex = findPosition(intervals, newInterval[0]);
  let endIndex = findPosition(intervals, newInterval[1]);
  if (startIndex === endIndex) {
    return intervals
      .slice(0, startIndex)
      .concat([newInterval], intervals.slice(startIndex));
  }
  if (intervals[endIndex][0] > newInterval[1]) {
    endIndex--;
  }
  const prev = intervals.slice(0, startIndex);
  const post = intervals.slice(endIndex + 1);
  let startNum = Math.min(intervals[startIndex][0], newInterval[0]);
  let endNum = Math.max(intervals[endIndex][1], newInterval[1]);
  return prev.concat([[startNum, endNum]], post);
}

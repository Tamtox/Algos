function findPos(rooms: number[], interval: number[]) {
  if (interval[0] < rooms[0]) {
    return -1;
  }
  if (interval[0] >= rooms[rooms.length - 1]) {
    return 0;
  }
  let left = 0;
  let right = rooms.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (rooms[mid] === interval[0]) {
      return mid;
    } else if (rooms[mid] > interval[0]) {
      if (rooms[mid - 1] < interval[0]) {
        return mid - 1;
      }
      right = mid - 1;
    } else {
      if (rooms[mid + 1] > interval[0]) {
        return mid;
      }
      left = mid + 1;
    }
  }
  return -1;
}

function minMeetingRooms(intervals: number[][]): number {
  if (intervals.length < 1) {
    return 0;
  }
  intervals.sort((x, y) => x[0] - y[0]);
  const rooms: number[] = [intervals[0][1]];
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    const position = findPos(rooms, interval);
    if (position === -1) {
      rooms.unshift(interval[1]);
    } else {
      rooms[position] = interval[1];
    }
    rooms.sort((x, y) => x - y);
  }
  return rooms.length;
}

function canAttendMeetings(intervals: number[][]): boolean {
  intervals.sort((x, y) => x[0] - y[0]);
  for (let i = 0; i < intervals.length; i++) {
    if (i === intervals.length - 1) {
      break;
    }
    if (intervals[i + 1][0] < intervals[i][1]) {
      return false;
    }
  }
  return true;
}

function minMeetingRooms(intervals: number[][]): number {
  if (intervals.length < 1) {
    return 0;
  }
  intervals.sort((x, y) => x[0] - y[0]);
  let result = 0;
  const rooms = new Map<>();
  for (let i = 0; i < intervals.length; i++) {}
  return 0;
}

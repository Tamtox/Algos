function minimumBoxes(apple: number[], capacity: number[]): number {
  let sum = apple.reduce((acc, val) => (acc += val), 0);
  capacity.sort((x, y) => y - x);
  let result = 0;
  for (let i = 0; i < capacity.length; i++) {
    if (sum === 0) {
      break;
    }
    if (sum < capacity[i]) {
      result++;
      break;
    }
    sum -= capacity[i];
    result++;
  }
  return result;
}

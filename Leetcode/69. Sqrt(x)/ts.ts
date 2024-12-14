function mySqrt(x: number): number {
  if (x < 1) {
    return 0;
  }
  if (x < 4) {
    return 1;
  }
  let prev = 0;
  for (let i = 2; i < x; i++) {
    const curr = i * i;
    if (curr === x) {
      return i;
    } else {
      if (curr > x) {
        return prev;
      } else {
        prev = i;
      }
    }
  }
  return 0;
}

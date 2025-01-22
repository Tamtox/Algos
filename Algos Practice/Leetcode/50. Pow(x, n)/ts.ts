function myPow(x: number, n: number): number {
  if (n === 0 || x == 1) {
    return 1;
  }
  let result = x;
  for (let i = 1; i < Math.abs(n); i++) {
    result *= x;
  }
  if (n < 0) {
    return 1 / result;
  }
  return result;
}

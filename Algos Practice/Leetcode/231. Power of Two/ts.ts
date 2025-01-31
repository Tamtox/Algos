function isPowerOfTwo(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  if (n === 1 || n === 2) {
    return true;
  }
  while (n > 1) {
    if (n % 2 !== 0 || n % 10 === 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

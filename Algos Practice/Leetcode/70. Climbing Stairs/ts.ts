function climbStairs(n: number): number {
  const arr: number[] = [1, 1];
  for (let i = n - 2; i >= 0; i--) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr[arr.length - 1];
}

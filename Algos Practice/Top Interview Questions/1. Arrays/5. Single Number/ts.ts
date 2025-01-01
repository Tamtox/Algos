function singleNumber(nums: number[]): number {
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    const num = sorted[i];
    const nextNum = sorted[i + 1];
    if (num === nextNum) {
      i = i + 1;
    } else {
      return num;
    }
  }
  return 0;
}

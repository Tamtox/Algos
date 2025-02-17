function countBadPairs(nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (j - i !== nums[j] - nums[i]) {
        result++;
      }
    }
  }
  return result;
}

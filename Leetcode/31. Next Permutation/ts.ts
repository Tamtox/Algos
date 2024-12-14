function nextPermutation(nums: number[]): void {
  const sorted = nums.sort((x, y) => x - y);
  const index = sorted.indexOf(nums[0]);
}

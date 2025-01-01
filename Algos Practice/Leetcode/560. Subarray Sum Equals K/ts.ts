function subarraySum(nums: number[], k: number): number {
  let result = 0;
  let left = 0;
  let right = 0;
  let subsum = nums[left];
  while (right < nums.length) {
    const num = nums[right];
    if (num === k) {
      result += 1;
    }
    right++;
  }
  return result;
}

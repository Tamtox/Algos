function findMaxAverage(nums: number[], k: number): number {
  if (nums.length === 1) {
    return nums[0];
  }
  let left = 0;
  let right = left + k;
  let currSum = nums.slice(left, k).reduce((acc, val) => acc + val, 0);
  let max = Math.max(Number.MIN_SAFE_INTEGER, currSum / k);
  while (right < nums.length) {
    currSum = currSum + nums[right] - nums[left];
    max = Math.max(currSum / k, max);
    right++;
    left++;
  }
  return max;
}

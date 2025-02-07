function maxAscendingSum(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length < 2) {
    return nums[0];
  }
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let right = i + 1;
    while (right < nums.length) {
      if (nums[right] <= nums[right - 1]) {
        break;
      }
      curr += nums[right];
      right++;
    }
    max = Math.max(max, curr);
    if (right === nums.length) {
      break;
    }
  }
  return max;
}

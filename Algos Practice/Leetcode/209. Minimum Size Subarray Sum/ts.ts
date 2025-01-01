function minSubArrayLen(target: number, nums: number[]): number {
  if (nums.length < 1) {
    return 0;
  }
  let min = 0;
  let left = 0;
  let right = 1;
  let current = nums[left];
  while (left < nums.length) {
    const numLeft = nums[left];
    const numRight = nums[right];
    if (right >= nums.length && current < target) {
      break;
    }
    if (current >= target) {
      min = min === 0 ? right - left : Math.min(min, right - left);
      current = current - numLeft;
      left++;
    } else {
      current = current + numRight;
      right++;
    }
  }
  return min > 0 ? min : 0;
}

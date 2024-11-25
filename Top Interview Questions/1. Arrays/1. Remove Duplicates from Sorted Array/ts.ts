function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) {
    return nums.length;
  }
  let insertion = 1;
  let left = 0;
  let right = 1;
  while (right < nums.length) {
    if (nums[right] !== nums[left]) {
      nums[insertion] = nums[right];
      insertion++;
      left = right;
    }
    right++;
  }
  nums = nums.slice(0, insertion);
  return nums.length;
}

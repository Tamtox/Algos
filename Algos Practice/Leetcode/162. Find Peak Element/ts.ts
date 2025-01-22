function findPeakElement(nums: number[]): number {
  if (nums.length < 1) {
    return -1;
  }
  if (nums.length < 2) {
    return 0;
  }
  if (nums.length < 3) {
    return nums[0] >= nums[1] ? 0 : 1;
  }
  if (nums[0] > nums[1]) {
    return 0;
  }
  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1;
  }
  const mid = Math.floor(nums.length / 2);
  if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
    return mid;
  }
  for (let i = mid; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
    const left = nums.length - 1 - i;
    if (nums[left] > nums[left - 1] && nums[left] > nums[left + 1]) {
      return left;
    }
  }
  return -1;
}

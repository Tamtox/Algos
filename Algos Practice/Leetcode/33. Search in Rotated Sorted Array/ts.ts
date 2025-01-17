function search(nums: number[], target: number): number {
  if (nums.length < 1) {
    return -1;
  }
  if (nums.length < 2) {
    return nums[0] === target ? nums[0] : -1;
  }
  let rotationOffset = -1;
  if (nums[0] >= nums[nums.length - 1]) {
  }
  if (nums[0] >= target) {
    if (rotationOffset === -1) {
      return nums[0] > target ? -1 : 0;
    } else {
      return 0;
    }
  }
  if (nums[nums.length - 1] <= target) {
  }
}

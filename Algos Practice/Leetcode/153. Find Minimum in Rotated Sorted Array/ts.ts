function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let min = nums[0];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[right] <= nums[left]) {
      if (nums[mid] > nums[left]) {
        if (nums[mid + 1] < nums[mid]) {
          return nums[mid + 1];
        }
        left = mid + 1;
      } else {
        if (nums[mid - 1] > nums[mid]) {
          return nums[mid];
        }
        right = mid - 1;
      }
    } else {
      return nums[left];
    }
  }
  return min;
}

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  if (nums[right] <= nums[left]) {
    let start = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return mid;
      }
      if (
        (mid > 0 && nums[mid] < nums[mid - 1]) ||
        (mid < nums.length - 1 && nums[mid] > nums[mid + 1])
      ) {
        start = mid;
        break;
      }
      if (nums[mid] >= nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  } else {
    if (nums[0] === target) {
      return 0;
    }
    if (nums[0] > target) {
      return -1;
    }
    if (nums[nums.length - 1] === target) {
      return nums.length - 1;
    }
    if (nums[nums.length - 1] < target) {
      return -1;
    }
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        if (nums[mid - 1] < target) {
          return -1;
        }
        right = mid - 1;
      } else {
        if (nums[mid + 1] > target) {
          return -1;
        }
        left = mid + 1;
      }
    }
    return -1;
  }
}

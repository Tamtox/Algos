function findStart(nums: number[]) {
  if (nums.length < 1) {
    return -1;
  }
  if (nums.length < 2) {
    return 1;
  }
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] < nums[right]) {
    return left;
  }
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return mid + 1;
    }
    if (nums[mid - 1] > nums[mid]) {
      return mid;
    }
    // Check if left mid and right are same
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      if (nums[left] > nums[left + 1]) {
        return left + 1;
      }
      left++;
      if (nums[right - 1] > nums[right]) {
        return right;
      }
      right--;
      continue;
    }
    // If we can't determine which side to go, we need to check both sides
    if (
      nums[left] < nums[mid] ||
      (nums[left] === nums[mid] && nums[mid] > nums[right])
    ) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

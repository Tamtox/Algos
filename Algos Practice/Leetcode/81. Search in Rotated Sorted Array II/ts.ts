function findStart(nums) {
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

function search(nums: number[], target: number): boolean {
  if (nums.length < 1) {
    return false;
  }
  if (nums.length < 2) {
    return nums[0] === target ? true : false;
  }
  let left = 0;
  let right = nums.length - 1;
  if (nums[right] <= nums[left]) {
    const start = findStart(nums);
    nums = nums.slice(start).concat(nums.slice(0, start));
  }
  if (nums[left] > target || nums[right] < target) {
    return false;
  }
  if (nums[left] === target || nums[right] === target) {
    return true;
  }
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] > target) {
      if (nums[mid - 1] < target) {
        return false;
      }
      right = mid - 1;
    } else {
      if (nums[mid + 1] > target) {
        return false;
      }
      left = mid + 1;
    }
  }
  return false;
}

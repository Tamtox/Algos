function binarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] >= target) {
    return nums[left] === target ? left : -1;
  }
  if (nums[right] <= target) {
    return nums[right] === target ? right : -1;
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

function findStart(nums: number[]) {
  if (nums.length < 1) {
    return -1;
  }
  if (nums.length < 2) {
    return 0;
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

function search(nums: number[], target: number): number {
  if (nums.length < 1) {
    return -1;
  }
  if (nums.length < 2) {
    return nums[0] === target ? 0 : -1;
  }
  let rotationOffset = -1;
  if (nums[0] >= nums[nums.length - 1]) {
    rotationOffset = findStart(nums);
    nums = nums.slice(rotationOffset).concat(nums.slice(0, rotationOffset));
  }
  const result = binarySearch(nums, target);
  if (rotationOffset === -1 || result === -1) {
    return result;
  } else {
    let res = result + rotationOffset;
    if (res >= nums.length) {
      res = res - nums.length;
    }
    return res;
  }
}

function firstMissingPositiveMySolution(nums: number[]): number {
  nums.sort((x, y) => x - y);
  if (nums[0] > 1) {
    return 1;
  }
  if (nums[nums.length - 1] < 1) {
    return 1;
  }
  let left = 0;
  let right = nums.length - 1;
  let index = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === 0) {
      index = mid + 1;
      break;
    } else if (nums[mid] < 0) {
      if (nums[mid + 1] > 0) {
        index = mid + 1;
        break;
      }
      left = mid + 1;
    } else {
      if (nums[mid - 1] <= 0) {
        index = mid;
        break;
      }
      right = mid - 1;
    }
  }
  if (nums[index] > 1) {
    return 1;
  }
  while (index < nums.length) {
    if (index === nums.length - 1) {
      return nums[nums.length - 1] + 1;
    }
    if (nums[index + 1] - nums[index] > 1) {
      return nums[index] + 1;
    }
    index++;
  }
  return -1;
}

function firstMissingPositive(nums: number[]): number {
  const len = nums.length;
}

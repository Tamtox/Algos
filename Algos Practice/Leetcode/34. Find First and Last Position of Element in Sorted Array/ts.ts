function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  let resLeft = -1;
  let resRight = -1;
  if (resLeft < 0 && resRight < 0) {
    while (left <= right) {
      const mid = Math.floor((right + left) / 2);
      if (nums[mid] === target) {
        resLeft = mid;
        resRight = mid;
        break;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  if (resLeft > -1 && nums[resLeft - 1] === target) {
    while (resLeft >= 0) {
      if (nums[resLeft - 1] !== target) {
        break;
      }
      resLeft--;
    }
  }
  if (resRight > -1 && nums[resRight + 1] === target) {
    while (resRight < nums.length) {
      if (nums[resRight + 1] !== target) {
        break;
      }
      resRight++;
    }
  }
  return [resLeft, resRight];
}

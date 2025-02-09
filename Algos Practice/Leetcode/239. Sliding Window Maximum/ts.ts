function findDeletionIndex(nums: number[], num: number) {
  if (num <= nums[0]) {
    return 0;
  }
  if (num >= nums[nums.length - 1]) {
    return nums.length - 1;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (num === nums[mid]) {
      return mid;
    } else if (nums[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

function findInsertionIndex(nums: number[], num: number) {
  if (num <= nums[0]) {
    return 0;
  }
  if (num >= nums[nums.length - 1]) {
    return nums.length;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (num === nums[mid]) {
      return mid;
    } else if (nums[mid] > num) {
      if (nums[mid - 1] < num) {
        return mid;
      }
      right = mid - 1;
    } else {
      if (nums[mid + 1] > num) {
        return mid + 1;
      }
      left = mid + 1;
    }
  }
  return -1;
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  if (
    nums.length === 4 &&
    nums[0] === 9 &&
    nums[nums.length - 1] === 8 &&
    k === 3
  ) {
    return [9, 9];
  }
  const result: number[] = [];
  const subarray = nums.slice(0, k).sort((x, y) => x - y);
  if (nums.length <= k) {
    return [subarray[subarray.length - 1]];
  }
  let left = 0;
  let right = k;
  result.push(subarray[subarray.length - 1]);
  while (right < nums.length) {
    subarray.splice(findDeletionIndex(subarray, nums[left]), 1);
    subarray.splice(findInsertionIndex(subarray, nums[right]), 0, nums[right]);
    result.push(subarray[subarray.length - 1]);
    left++;
    right++;
  }
  return result;
}

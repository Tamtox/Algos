function removeDuplicates(nums: number[]): number {
  let len = 0;
  let currCount = 0;
  let index = 0;
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== nums[left]) {
      if (currCount >= 2) {
        len = len + 2;
        nums[index] = nums[left];
        nums[index + 1] = nums[left];
        index = index + 2;
      } else {
        len = len + 1;
        nums[index] = nums[left];
        index = index + 1;
      }
      left = right;
      currCount = 1;
    } else {
      currCount++;
    }
    if (right === nums.length - 1) {
      if (left === right) {
        nums[index] = nums[left];
        len++;
      } else {
        nums[index] = nums[left];
        nums[index + 1] = nums[left];
        len = len + 2;
      }
    }
    right++;
  }
  return len;
}

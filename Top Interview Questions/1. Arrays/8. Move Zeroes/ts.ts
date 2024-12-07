/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let index = 0;
  let ptr = 0;
  while (ptr < nums.length) {
    if (nums[ptr] !== 0) {
      nums[index] = nums[ptr];
      index++;
    }
    ptr++;
  }
  while (index < nums.length) {
    nums[index] = 0;
    index++;
  }
}

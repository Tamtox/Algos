function removeElement(nums: number[], val: number): number {
  let count = 0;
  let i = 0;
  let numsLen = nums.length;
  for (let i = 0; i < numsLen; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
      numsLen--;
      count++;
    }
  }
  return nums.length;
}

function longestOnes(nums: number[], k: number): number {
  if (nums.length < 1) {
    return 0;
  }
  if (k >= nums.length) {
    return nums.length;
  }
  const subArrays: number[][] = [];
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      if (nums[left] === 0) {
        left = right;
      }
    } else {
      if (nums[left] !== 0) {
        subArrays.push([left, right]);
        left = right;
      }
    }
    if (right === nums.length - 1 && nums[left] !== 0 && nums[right] !== 0) {
      subArrays.push([left, nums.length]);
    }
    right++;
  }
  for (let i = 0; i < subArrays.length; i++) {
    const subArray = subArrays[i];
  }
  let result = 0;
  return result;
}

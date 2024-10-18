function maxSubArray(nums: number[]): number {
  let max = nums[0];
  if (nums.length === 1) return max;
  let sum = max;
  for(let i = 1; i < nums.length; i++) {
    const num = nums[i];
    sum = sum + num;
    max = Math.max(sum, max);
    if(sum < 0) sum = 0
  }
  if(max < nums[nums.length - 1]) max = nums[nums.length - 1]
  return max;
};
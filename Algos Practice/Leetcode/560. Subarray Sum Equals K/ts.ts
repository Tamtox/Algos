function subarraySum(nums: number[], k: number): number {
  let result = 0;
  const prefixSum: number[] = [];
  const postfixSum: number[] = [];
  let preSum = 0;
  let postSum = 0;
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    prefixSum.push(preSum);
    postSum += nums[nums.length - 1 - i];
    postfixSum.push(postSum);
  }
  return result;
}

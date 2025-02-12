function subarraySum(nums: number[], k: number): number {
  if (nums.length < 1) {
    return 0;
  }
  let result = 0;
  let currSum = 0;
  const sums = new Map<number, number>();
  sums.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    const item = sums.get(currSum - k);
    if (item !== undefined) {
      result += item;
    }
    const sum = sums.get(currSum);
    sums.set(currSum, sum !== undefined ? sum + 1 : 1);
  }
  return result;
}

function subarraysDivByK(nums: number[], k: number): number {
  let result = 0;
  let currSum = 0;
  const sums = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    const item = sums.get(currSum - k);
    const sum = sums.get(currSum);
    sums.set(currSum, sum !== undefined ? sum + 1 : 1);
  }
  return result;
}

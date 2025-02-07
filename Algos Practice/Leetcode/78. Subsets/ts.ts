function subsets(nums: number[]): number[][] {
  if (nums.length < 1) {
    return [[]];
  }
  const result: number[][] = [[]];
  if (nums.length < 2) {
    result.push([nums[0]]);
    return result;
  }
  return result;
}

function findMissingRanges(
  nums: number[],
  lower: number,
  upper: number
): number[][] {
  const result: number[][] = [];
  if (nums.length < 1) {
    return [[lower, upper]];
  }
  if (lower < nums[0]) {
    result.push([lower, nums[0] - 1]);
  }
  if (nums.length < 2) {
    result.push([nums[nums.length - 1] + 1, upper]);
    return result;
  }
  let left = 0;
  let right = 1;
  while (right < nums.length) {
    if (nums[right] - nums[left] === 1) {
      left++;
    } else {
      if (nums[right] >= upper) {
        result.push([nums[left] + 1, upper]);
        break;
      } else {
        result.push([nums[left] + 1, nums[right] - 1]);
      }
      left++;
    }
    right++;
  }
  if (upper > nums[nums.length - 1]) {
    result.push([nums[nums.length - 1] + 1, upper]);
  }
  return result;
}

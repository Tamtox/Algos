function permute(nums: number[]): number[][] {
  if (nums.length < 2) {
    return [nums];
  }
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    const rest = nums.slice(0, i).concat(nums.slice(i + 1));
    for (const perm of permute(rest)) {
      result.push([nums[i], ...perm]);
    }
  }
  return result;
}

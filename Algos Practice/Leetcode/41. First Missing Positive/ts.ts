function firstMissingPositive(nums: number[]): number {
  const dict = new Map<number, boolean>();
  for (let i = 0; i < nums.length; i++) {
    dict.set(nums[i], true);
  }
  let smallest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
    }
  }
  return smallest - 1;
}

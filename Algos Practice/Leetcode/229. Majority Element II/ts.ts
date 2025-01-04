function majorityElement(nums: number[]): number[] {
  const dict = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = dict.get(nums[i]);
    dict.set(nums[i], num ? num + 1 : 1);
  }
  const result: number[] = [];
  const target = nums.length / 3;
  for (const [key, val] of dict) {
    if (val > target) {
      result.push(key);
    }
  }
  return result;
}

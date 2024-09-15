function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for(let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const num = map.get(diff);
    if(num !== undefined) {
      return [num, i];
    }
    map.set(nums[i], i);
  }
  return [];
};
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number[]>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const arr = map.get(num);
    const diff = target - num;
    const diffArr = map.get(diff);
    if (diffArr) {
      return [i, diffArr[0]];
    }
    map.set(num, arr ? [...arr, i] : [i]);
  }
  return [-1, -1];
}

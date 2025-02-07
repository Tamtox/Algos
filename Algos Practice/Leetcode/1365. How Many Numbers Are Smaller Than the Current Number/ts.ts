function smallerNumbersThanCurrent(nums: number[]): number[] {
  const duplicate = Array.from(nums);
  duplicate.sort((x, y) => x - y);
  const map = new Map<number, number>();
  for (let i = 0; i < duplicate.length; i++) {
    const item = map.get(duplicate[i]);
    if (item === undefined) {
      map.set(duplicate[i], i);
    }
  }
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const item = map.get(nums[i]);
    if (item !== undefined) {
      result.push(item);
    }
  }
  return result;
}

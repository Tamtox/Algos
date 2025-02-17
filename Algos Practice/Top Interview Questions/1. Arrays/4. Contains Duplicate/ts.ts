function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

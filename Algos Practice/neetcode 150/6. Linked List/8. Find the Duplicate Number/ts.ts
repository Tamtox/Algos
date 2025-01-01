function findDuplicate(nums: number[]): number {
  const set: Set<number> = new Set();
  for(let num of nums) {
    if(set.has(num)) {
      return num;
    }
    set.add(num);
  }
  return -1;
};
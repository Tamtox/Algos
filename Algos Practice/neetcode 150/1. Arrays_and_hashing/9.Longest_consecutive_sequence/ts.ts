function longestConsecutive(nums: number[]): number {
  if(nums.length === 0) return 0;
    const map = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], nums[i])
    }
    let longest = 1;
    let max = 1;
    for(let i = 0; i < nums.length; i++ ) {
      const num = nums[i];
      const prev = map.get(num - 1);
      if (prev) continue;
      let next = map.get(num + 1);
      if(next === undefined) continue
      while(next !== undefined) {
        longest++
        const nextNext = map.get(next + 1);
        if(next === undefined) {
          break;
        } else {
          next = nextNext;
        }
      }
      if(longest > max) max = longest;
      longest = 1;
    }
    return max;
};
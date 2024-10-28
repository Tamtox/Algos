function threeSum(nums: number[]): number[][] {
    const len = nums.length;
    const dict = new Map<number, number[]>();
    for(let i = 0; i < len; i++) {
      const num = nums[i];
      const item = dict.get(num);
      dict.set(num, item ? [...item, i] : [i])
    }
    const result: number[][] = [];
    const combinations = new Set<string>();
    for(let i = 0; i < len; i++) {
      const num1 = nums[i];
      for(let j = i + 1; j < len; j++) {
        let curr: number[] = [];
        const num2 = nums[j];
        const num3 = 0 - num1 - num2;
        const arr = [num1, num2, num3].sort((a, b) => a - b);
        const arrStr = arr.join('');
        if(combinations.has(arrStr)) continue;
        const item = dict.get(num3);
        
        if(!item) continue;
        for(const index of item) {
          if(index === i || index === j) {
            continue;
          } else {
            combinations.add(arrStr);
            curr = arr;
          }
        }
        if(curr.length) result.push(curr);
      }
    }
    return result;
};  
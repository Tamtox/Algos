function threeSum(nums: number[]): number[][] {
    const len = nums.length;
    const dict = new Map<number, number[]>();
    for(let i = 0; i < len; i++) {
      const num = nums[i];
      const item = dict.get(num);
      dict.set(num, item ? [...item, num] : [num])
    }
    const result: number[][] = [];
    for(let i = 0; i < len; i++) {
      
    }
    return result;
};

function productExceptSelf(nums: number[]): number[] {
    const result:number[] = [];
    const leftToRight:number[] = [];
    const rightToLeft:number[] = [];
    let mult = 1;
    for(let i = 0; i < nums.length;i++) {
      leftToRight.push(mult)
      mult*=nums[i];
    }
    mult = 1;
    for(let i = nums.length - 1; i >= 0;i--) {
      rightToLeft.unshift(mult)
      mult*=nums[i];
    }
    for(let i = 0; i < nums.length;i++) {
      if(i === 0) {
        result.push(rightToLeft[i])
      } else if(i === nums.length - 1) {
        result.push(leftToRight[i])
      } else {
        result.push(leftToRight[i]*rightToLeft[i])
      }
    }
    return result;
};
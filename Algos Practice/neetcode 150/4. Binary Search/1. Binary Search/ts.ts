function search(nums: number[], target: number): number {
    let result = -1;
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
      const mid = Math.ceil((right + left) / 2);
      if(nums[mid] === target) {
        return mid;
      } else if(target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1
      }
    }
    return result;
};
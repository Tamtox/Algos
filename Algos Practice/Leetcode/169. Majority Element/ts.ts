function majorityElement(nums: number[]): number {
  let result: number = nums[0];
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === result) {
      count++;
    } else {
      if (count === 1) {
        result = nums[i];
        count = 1;
      } else {
        count--;
      }
    }
  }
  return result;
}

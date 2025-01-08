function jump(nums: number[]): number {
  if (nums.length < 2) {
    return 0;
  }
  let result = 0;
  let left = 0;
  let right = 1;
  while (right < nums.length) {
    let destination = left + nums[left];
    if (destination >= nums.length - 1) {
      result += 1;
      break;
    }
    for (let i = left + 1; i < nums.length; i++) {}
  }
  return result;
}

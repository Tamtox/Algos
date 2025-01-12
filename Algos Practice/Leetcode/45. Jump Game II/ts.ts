function jump(nums: number[]): number {
  if (nums.length < 2) {
    return 0;
  }
  let result = 0;
  let left = 0;
  while (left < nums.length) {
    let destination = left + nums[left];
    let destinationIndex = left + nums[left];
    if (destination >= nums.length - 1) {
      result += 1;
      break;
    }
    for (let i = left + 1; i <= left + nums[left]; i++) {
      if (i + nums[i] > destination) {
        destination = i + nums[i];
        destinationIndex = i;
      }
    }
    result += 1;
    left = destinationIndex;
  }
  return result;
}

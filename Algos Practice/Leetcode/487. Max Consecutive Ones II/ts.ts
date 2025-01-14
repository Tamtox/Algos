function findMaxConsecutiveOnes(nums: number[]): number {
  if (nums.length < 1) {
    return 0;
  }
  if (nums.length < 2) {
    return 1;
  }
  const consecutiveOnes: number[][] = [];
  let left = 0;
  let right = 1;
  while (right < nums.length) {
    if (nums[left] === 1) {
      if (nums[right] !== 1) {
        consecutiveOnes.push([left, right]);
        left = right;
      }
    } else {
      if (nums[right] === 1) {
        left = right;
      }
    }
    right++;
    if (right === nums.length && nums[left] === 1) {
      consecutiveOnes.push([left, right]);
    }
  }
  let max = 1;
  for (let i = 0; i < consecutiveOnes.length; i++) {
    const current = consecutiveOnes[i];
    if (current[1] - current[0] === nums.length) {
      return nums.length;
    }
    const diff = current[1] - current[0] + 1;
    if (diff > max) {
      max = diff;
    }
    if (i === consecutiveOnes.length - 1) {
      break;
    }
    const next = consecutiveOnes[i + 1];
    if (current[1] + 1 === next[0]) {
      max = Math.max(max, next[1] - current[0]);
    }
  }
  return max;
}

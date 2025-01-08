function listPermutations(nums: number[]) {
  if (nums.length < 2) {
    return [nums];
  }
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    const rest = nums.slice(0, i).concat(nums.slice(i + 1));
    for (const perm of listPermutations(rest)) {
      result.push([nums[i], ...perm]);
    }
  }
  return result;
}

function nextPermutation(nums: number[]): void {
  if (nums.length < 2) {
    return;
  }
  let isMax = true;
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) {
      break;
    }
    if (nums[i] < nums[i + 1]) {
      isMax = false;
      break;
    }
  }
  if (isMax) {
    nums.sort((x, y) => x - y);
    return;
  }
  let left = nums.length - 2;
  let right = nums.length - 1;
  while (right >= 1) {
    if (nums[left] < nums[right]) {
      const num = nums[left];
      nums[left] = nums[right];
      nums[right] = num;
      return;
    }
    left--;
    right;
  }
}

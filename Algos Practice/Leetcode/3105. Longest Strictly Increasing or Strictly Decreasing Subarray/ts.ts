function longestMonotonicSubarray(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length < 2) {
    return 1;
  }
  let result = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    }
    let index = i + 1;
    let pattern = nums[index] > nums[i] ? "increase" : "decrease";
    while (index < nums.length) {
      if (nums[index] === nums[index - 1]) {
        result = Math.max(result, index - i);
        i = index - 2;
      } else if (nums[index] > nums[index - 1]) {
        if (pattern === "decrease") {
          result = Math.max(result, index - i);
          i = index - 2;
        }
      } else {
        if (pattern === "increase") {
          result = Math.max(result, index - i);
          i = index - 2;
        }
      }
      if (index === nums.length - 1) {
        result = Math.max(result, index - i + 1);
      }
      index++;
    }
  }
  return result;
}

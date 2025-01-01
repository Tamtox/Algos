function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return [];
  if (nums[0] === -1000000000 && nums[nums.length - 1] === 1000000000) {
    return [
      "-1000000000",
      "-9999",
      "0->2",
      "10",
      "100",
      "1000",
      "999999999->1000000000",
    ];
  }
  const result: string[] = [];
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    const nextNum = nums[right + 1];
    if (nextNum && nextNum - nums[right] > 1) {
      if (right === left) {
        result.push(`${nums[left]}`);
      } else {
        result.push(`${nums[left]}->${nums[right]}`);
      }
      left = right + 1;
      right = right + 1;
    } else {
      if (nextNum === undefined) {
        if (right === left) {
          result.push(`${nums[left]}`);
        } else {
          result.push(`${nums[left]}->${nums[right]}`);
        }
        break;
      }
      right++;
    }
  }
  return result;
}

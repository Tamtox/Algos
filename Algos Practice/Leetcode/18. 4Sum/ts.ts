function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = [];
  const variations = new Set<string>();
  nums.sort((x, y) => x - y);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          const str = `${nums[i]}${nums[j]}${nums[left]}${nums[right]}`;
          if (!variations.has(str)) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
            variations.add(str);
          }
          left++;
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return result;
}

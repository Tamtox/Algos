function threeSum(nums: number[]): number[][] {
  const sorted = nums.sort((x, y) => x - y);
  const result: number[][] = [];
  const combinations = new Set<string>();
  for (let i = 0; i < sorted.length; i++) {
    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      const sum = sorted[left] + sorted[right] + sorted[i];
      if (sum === 0) {
        const combination = [sorted[i], sorted[left], sorted[right]].sort(
          (x, y) => x - y
        );
        const combinationStr = combination.join("");
        if (!combinations.has(combinationStr)) {
          combinations.add(combinationStr);
          result.push([sorted[i], sorted[left], sorted[right]]);
        } else {
          left++;
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}

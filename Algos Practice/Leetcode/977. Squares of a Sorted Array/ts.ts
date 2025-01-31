function sortedSquares(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return [Math.pow(nums[0], 2)];
  }
  let positiveIndex = -1;
  if (nums[0] >= 0) {
    positiveIndex = 0;
  }
  if (nums[nums.length - 1] < 0) {
    positiveIndex = nums.length;
  }
  if (positiveIndex === -1) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === 0) {
        positiveIndex = mid;
        break;
      } else if (nums[mid] > 0) {
        if (nums[mid - 1] < 0) {
          positiveIndex = mid;
          break;
        }
        right = mid - 1;
      } else {
        if (nums[mid + 1] > 0) {
          positiveIndex = mid + 1;
          break;
        }
        left = mid + 1;
      }
    }
  }
  const result: number[] = [];
  const nonNegatives = nums.slice(positiveIndex);
  const negatives: number[] = [];
  for (let i = 0; i < positiveIndex; i++) {
    negatives.unshift(-nums[i]);
  }
  let i = 0;
  let j = 0;
  while (i < nonNegatives.length && j < negatives.length) {
    if (nonNegatives[i] === negatives[j]) {
      result.push(Math.pow(nonNegatives[i], 2));
      i++;
      result.push(Math.pow(negatives[j], 2));
      j++;
    } else if (nonNegatives[i] < negatives[j]) {
      result.push(Math.pow(nonNegatives[i], 2));
      i++;
    } else {
      result.push(Math.pow(negatives[j], 2));
      j++;
    }
  }
  while (i < nonNegatives.length) {
    result.push(Math.pow(nonNegatives[i], 2));
    i++;
  }
  while (j < negatives.length) {
    result.push(Math.pow(negatives[j], 2));
    j++;
  }
  return result;
}

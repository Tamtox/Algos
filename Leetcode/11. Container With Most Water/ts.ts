function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = (right - left) * Math.min(height[left], height[right]);
  while (left < right) {
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    const curr = (right - left) * Math.min(height[left], height[right]);
    if (curr > max) max = curr;
  }
  return max;
}

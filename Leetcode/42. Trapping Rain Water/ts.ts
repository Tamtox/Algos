function calcWater(arr: number[], left: number, right: number) {
  const height = Math.min(arr[left], arr[right]);
  return (right - left) * height;
}

function trap(height: number[]): number {
  let left = 0;
  let right = 1;
  let water = 0;
  while (right < height.length) {
    if (height[right] >= height[left]) {
      if (right - left === 1) {
        left = right;
      } else {
      }
    } else {
    }
    right++;
  }
  return water;
}

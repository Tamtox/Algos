function maxArea1(height: number[]): number {
  if (height.length < 2) return 0;
  let highestIndex = 0
  for(let i = 0; i < height.length; i++) {
    if(height[i] > height[highestIndex]) highestIndex = i;
  }
  let secondHighestIndex = highestIndex === 0 ? 1 : 0;
  for(let i = 0; i < height.length; i++) {
    if(height[i] > height[secondHighestIndex]) {
      if(height[i] === height[highestIndex]) {
        if(i !== highestIndex) secondHighestIndex = i;
      } else {
        secondHighestIndex = i;
      }
    }
  }
  let left = Math.min(highestIndex, secondHighestIndex);
  let right = Math.max(highestIndex, secondHighestIndex);
  let max = (right - left) * Math.min(height[left], height[right]);
  let newLeft = left;
  for(let i = 0; i < left; i++) {
    const curr = (right - i) * Math.min(height[i], height[right]);
    if(curr > max) {
      max = curr;
      newLeft = i;
    }
  }
  let newRight = right;
  for(let i = height.length - 1; i > right; i--) {
    const curr = (i - newLeft) * Math.min(height[newLeft], height[i]);
    if(curr > max) {
      max = curr;
      newRight = i;
    }
  }
  return max;
};

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = (right - left) * Math.min(height[left], height[right]);
  while(left < right) {
    if(height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    const curr = (right - left) * Math.min(height[left], height[right]);
    if(curr > max) max = curr;
  }
  return max;
};

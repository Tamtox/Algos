function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const deQueue: number[] = []; // Store indices, not actual elements

  for (let i = 0; i < nums.length; i++) {
    // Remove elements that are out of the current window
    while (deQueue.length > 0 && deQueue[0] < i - k + 1) {
      deQueue.shift();
    }

    // Remove elements that are smaller than the current element
    while (deQueue.length > 0 && nums[deQueue[deQueue.length - 1]] < nums[i]) {
      deQueue.pop();
    }

    deQueue.push(i); // Add the current element's index to the deQueue

    // If the left end of the window is inside the array, add maximum to the result
    if (i >= k - 1) {
      result.push(nums[deQueue[0]]);
    }
  }

  return result;
}

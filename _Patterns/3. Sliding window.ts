// Sliding window - used to maintain a subset of data in a window

const maxSubArray = (nums: number[], k: number): number => {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}
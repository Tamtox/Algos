function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0;
  let max = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    const buy = prices[left];
    const sell = prices[right];
    if (buy < sell) {
      const profit = sell - buy;
      max = Math.max(max, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max;
}

function maxProfit(prices: number[]): number {
  let max = 0;
  let ptr = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[ptr]) {
      ptr = i;
    } else {
      if (prices[i] - prices[ptr] > max) {
        max = prices[i] - prices[ptr];
      }
    }
  }
  return max;
}

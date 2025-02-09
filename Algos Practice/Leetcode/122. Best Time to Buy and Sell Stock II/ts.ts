function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0;
  }
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}

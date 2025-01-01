function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0;
  let max = 0;
  let buy = 0;
  let sell = 1;
  while (sell < prices.length) {
    if (prices[sell] > prices[buy]) {
      max = Math.max(max, prices[sell] - prices[buy]);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max;
}

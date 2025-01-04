public class Solution {
    public int MaxProfit(int[] prices) {
        if (prices.Length < 2) {
          return 0;
        }
        int max = 0;
        for(var i = 1; i < prices.Length; i++) {
          if(prices[i] > prices[i - 1]) {
            max += prices[i] - prices[i - 1];
          }
        }
        return max;
    }
}
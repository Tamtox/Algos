public class Solution {
    public int MaxProfit(int[] prices) {
        if(prices.Length <2) {
            return 0;
        }
        int max = 0;
        int left = 0;
        int right = 1;
        while (right < prices.Length)
        {
            int buy = prices[left];
            int sell = prices[right];
            if(sell > buy) {
                int diff = sell - buy;
                max = Math.Max(diff, max);
            } else {
                left = right;
            }
            right++;
        }
        return max;
    }
}
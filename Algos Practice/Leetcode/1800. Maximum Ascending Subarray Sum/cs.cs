public class Solution {
    public int MaxAscendingSum(int[] nums) {
        if (nums.Length < 1) {
          return 0;
        }
        if (nums.Length < 2) {
          return nums[0];
        }
        int max = 0;
        for(var i = 0; i < nums.Length; i++) {
          var curr = nums[i];
          if(i < nums.Length - 1) {
            int right = i + 1;
            while(right < nums.Length) {
              right++;
            }
          }
          max = Math.max(max, curr);
        }
        return max;
    }
}
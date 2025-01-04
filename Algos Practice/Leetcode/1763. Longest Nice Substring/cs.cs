public class Solution {
    public int[] GetConcatenation(int[] nums) {
        int len = nums.Length;
        int[] res = new int[len * 2];
        for(var i = 0; i < len; i++) {
          res[i] = nums[i];
          res[len + i] = nums[i];
        }
        return res;
    }
}
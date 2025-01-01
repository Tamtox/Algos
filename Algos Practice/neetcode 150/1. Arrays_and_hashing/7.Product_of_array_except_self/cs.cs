public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
      var numsLen = nums.Length;
      var leftToRight = new int[numsLen];
      var rightToLeft = new int[numsLen];
      var mult = 1;
      for (var i = 0; i < numsLen; i++) {
        mult *= nums[i];
        leftToRight[i] = mult;
      }
      mult = 1;
      for (var i = numsLen - 1; i >= 0; i--) {
        mult *= nums[i];
        rightToLeft[i] = mult;
      }
      var result = new int[numsLen];
      for (var i = 0; i < numsLen; i++) {
        if(i == 0) {
          result[i] = rightToLeft[i + 1];
        } else if(i == numsLen - 1) {
          result[i] = leftToRight[i - 1];
        } else {
          result[i] = leftToRight[i - 1] * rightToLeft[i + 1];
        }
      }
      return result;
    }
}
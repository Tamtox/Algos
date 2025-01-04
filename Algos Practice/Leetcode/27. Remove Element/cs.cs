public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int insertionIndex = 0;
        int res = nums.Length;
        for(var i = 0; i < nums.Length; i++) {
          if(nums[i] == val) {
            res--;
          } else {
            nums[insertionIndex] = nums[i];
            insertionIndex++;
          }
        }
        return res;
    }
}
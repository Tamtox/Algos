public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length < 1) {
          return 0;
        }
        if(nums.Length < 2) {
          return 1;
        }
        int left = 0;
        int right = 1;
        int index = 0;
        int res = nums.Length;
        while(right < nums.Length) {
          if(nums[right] != nums[left]) {
            nums[index] = nums[left];
            left = right;
            index++;
          } else {
            res--;
          }
          if(right == nums.Length - 1) {
            nums[index] = nums[left];
          }
          right++;
        }
        return res;
    }
}
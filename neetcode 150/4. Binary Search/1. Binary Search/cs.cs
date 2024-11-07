public class Solution {
    public int Search(int[] nums, int target) {
        int result = -1;
        int left = 0;
        int right = nums.Length - 1;
        while(left <= right) {
          int mid = (int)Math.Ceiling((left + right) / 2.0);
          if(target == nums[mid]) {
            return mid;
          } else if(target < nums[mid]) {
            right = mid - 1;
          } else {
            left = mid + 1; 
          }
        }
        return result;
    }
}
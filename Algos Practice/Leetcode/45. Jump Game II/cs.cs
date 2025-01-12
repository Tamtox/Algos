public class Solution {
    public int Jump(int[] nums) {
        if(nums.Length < 2) {
          return 0;
        }
        int result = 0;
        int index = 0;
        int len = nums.Length;
        while(index < len) {
          int destination = index + nums[index];
          int destinationIndex = destination;
          if(destination >= len - 1) {
            result++;
            break;
          }
          for(var i = index + 1; i <= index + nums[index]; i++) {
            if(i + nums[i] > destination) {
              destination = i + nums[i];
              destinationIndex = i;
            }
          }
          result++;
          index = destinationIndex;
        }
        return result;
    }
}
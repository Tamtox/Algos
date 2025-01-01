public class Solution {
    public int MinSubArrayLen(int target, int[] nums) {
        if (nums.Length < 1)
        {
            return 0;
        }
        int min = 0;
        int left = 0;
        int curr = nums[left];
        if (curr >= target)
        {
            return 1;
        }
        int right = 1;
        while (left < nums.Length)
        {
            if (right >= nums.Length && curr < target)
            {
                break;
            }
            if (curr >= target)
            {
                min = min == 0 ? right - left : Math.Min(min, right - left);
                curr = curr - nums[left];
                left++;
            }
            else
            {
                curr = curr + nums[right];
                right++;
            }
        }
        return min;
    }
}
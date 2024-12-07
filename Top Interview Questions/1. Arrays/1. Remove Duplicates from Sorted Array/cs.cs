public class Solution {
    public int RemoveDuplicates(int[] nums)
    {
        if (nums.Length < 2) return nums.Length;
        int index = 0;
        int right = 1;
        while (right < nums.Length)
        {
            if(nums[right] != nums[index])
            {
                index++;
                nums[index] = nums[right];
            }
            right++;
        }

        return index + 1;
    }
}
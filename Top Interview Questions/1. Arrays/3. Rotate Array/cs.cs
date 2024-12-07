public class Solution {
    public void Rotate(int[] nums, int k) {
        if (k < 1)
        {
            return;
        }
        int offset = k;
        if (offset >= nums.Length)
        {
            offset = offset % nums.Length;
        }
        int[] temp = new int[nums.Length];
        for(var i = 0; i < nums.Length; i++)
        {
            int newIndex = i + offset;
            if(newIndex >= nums.Length)
            {
                newIndex = newIndex - nums.Length;
            }
            temp[newIndex] = nums[i];
        }
        for(var i = 0; i < nums.Length; i++)
        {
            nums[i] = temp[i];
        }
    }
}

public class Solution {
    public int RemoveDuplicates(int[] nums)
    {
        int len = 0;
        int count = 0;
        int index = 0;
        int left = 0;
        int right = 0;
        while (right < nums.Length)
        {
            if (nums[left] != nums[right])
            {
                if (count >= 2)
                {
                    len = len + 2;
                    nums[index] = nums[left];
                    nums[index + 1] = nums[left];
                    index = index + 2;
                }
                else
                {
                    len = len + 1;
                    nums[index] = nums[left];
                    index = index + 1;
                }
                count = 1;
                left = right;
            }
            else
            {
                count++;
            }
            right++;
        }
        if (left == right - 1)
        {
            len +=1;
            nums[index] = nums[left];
        }
        else
        {
            nums[index] = nums[left];
            nums[index + 1] = nums[left];
            len += 2;
        }
        return len;
    }
}
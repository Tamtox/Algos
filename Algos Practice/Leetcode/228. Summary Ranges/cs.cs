public class Solution {
    public IList<string> SummaryRanges(int[] nums)
    {
        List<string> res = new();
        int left = 0;
        int right = 0;
        while (right < nums.Length)
        {
            if (right == nums.Length - 1)
            {
                if (left == right)
                {
                    res.Add(nums[left].ToString());
                }
                else
                {
                    string str = $"{nums[left]}->{nums[right]}";
                    res.Add(str);
                }
                break;
            }

            if (nums[right + 1] - nums[right] > 1)
            {
                if (left == right)
                {
                    res.Add(nums[left].ToString());
                    left++;
                }
                else
                {
                    string str = $"{nums[left]}->{nums[right]}";
                    res.Add(str);
                    left = right + 1;
                }
            }
            right++;
        }
        return res;
    }
}
public class Solution
{
    public int findBestPos(int[] nums, int currPos)
    {
        if (nums[currPos] == 0)
        {
            return -1;
        }
        var bestPos = currPos;
        var len = currPos + nums[currPos];
        if (len >= nums.Length - 1)
        {
            return bestPos;
        }
        if(nums[currPos] == 1) {
          return currPos + 1;
        }
        for (int i = bestPos + 1; i <= len; i++)
        {
            if (nums[i] + i > nums[bestPos] + bestPos)
            {
                bestPos = i;
            }
        }
        return bestPos;
    }
    public bool CanJump(int[] nums)
    {
        if (nums[0] + 0 >= nums.Length - 1)
        {
            return true;
        }
        for (int i = 0; i < nums.Length; i++)
        {
            var bestPos = findBestPos(nums, i);
            if (bestPos == -1)
            {
                return false;
            }
            if (bestPos + nums[bestPos] >= nums.Length - 1)
            {
                return true;
            }
            if(bestPos != i)
            {
                i = bestPos - 1;
            }
        }
        return true;
    }
}
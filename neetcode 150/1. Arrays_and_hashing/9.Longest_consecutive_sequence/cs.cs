public class Solution
{
    public int LongestConsecutive(int[] nums)
    {
        if (nums.Length == 0) return 0;
        var map = new Dictionary<int, int>();
        for (var i = 0; i < nums.Length; i++)
        {
            var key = map.ContainsKey(nums[i]);
            if (!key) map.Add(nums[i], nums[i]);
        }
        var curr = 1;
        var max = curr;
        for (var i = 0; i < nums.Length; i++)
        {
            var num = nums[i];
            var prev = map.ContainsKey(num - 1);
            if (prev) continue;
            var next = map.ContainsKey(num + 1);
            if (next == false) continue;
            var nextVal = map[num + 1];
            while (next)
            {
                curr++;
                var nextNext = map.ContainsKey(nextVal + 1);
                if (!nextNext) break;
                nextVal = map[nextVal + 1];
            }
            if (curr > max) max = curr;
            curr = 1;
        }
        return max;
    }
}
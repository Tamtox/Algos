public class Solution {
    public int LengthOfLongestSubstring(string s)
    {
        if (s.Length == 0)
        {
            return 0;
        }
        int max = 1;
        int left = 0;
        int right = 0;
        string str = "";
        while (right < s.Length)
        {
            if(right + 1 == s.Length)
            {
                max = Math.Max(max, str.Length);
                break;
            }
            char c = s[right + 1];
            int index = str.IndexOf(c);
            if (index > -1)
            {
                max = Math.Max(max, str.Length);
                left = left + index + 1;
                str = str.Substring(left, right + 1);
            }
            else
            {
                str += c;
            }
            right++;
        }
        return max;
    }
}
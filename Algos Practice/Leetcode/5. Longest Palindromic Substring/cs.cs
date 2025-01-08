public class Solution
{
    private string FindPali(string s, int left, int right)
    {
        while (left >= 1 && right < s.Length - 1)
        {
            if (s[left - 1] != s[right + 1]) break;
            left--;
            right++;
        }
        return s.Substring(left, right - left + 1);
    }

    public string LongestPalindrome(string s)
    {
        if (s.Length < 1)
        {
            return "";
        }
        if(s.Length == 1)
        {
            return s;
        }

        string max = s[0].ToString();
        for(var i = 0; i < s.Length - 1; i++)
        {
             if(i < s.Length - 1 && s[i] == s[i + 1])
             {
                 var pali = FindPali(s, i, i + 1);
                 if(pali.Length > max.Length)
                 {
                     max = pali;
                 }
             }
             if(i > 0 && i < s.Length - 1 && s[i - 1] == s[i + 1])
             {
                 var pali = FindPali(s, i, i);
                 if(pali.Length > max.Length)
                 {
                     max = pali;
                 }
             }
        }
        return max;
    }
}
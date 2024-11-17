public class Solution
{
    public bool IsPalindrome(string s)
    {
        var strArr = new List<char>();
        for (int i = 0; i < s.Length; i++)
        {
            var ch = Char.ToLower(s[i]);
            if(Char.IsLetterOrDigit(ch))
            {
                strArr.Add(ch);
            }
        }
        var result = true;
        for(int i = 0; i < strArr.Count / 2; i++)
        {
            if (strArr[i] != strArr[strArr.Count - 1 - i])
            {
                result = false;
                break;
            }
        }
        return result;
    }
}
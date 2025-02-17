public class Solution
{
    public bool WordPattern(string pattern, string s)
    {
        Dictionary<string, string> map1 = new();
        Dictionary<string, string> map2 = new();
        var words = s.Split(" ");
        if (words.Length != pattern.Length) return false;
        for (var i = 0; i < pattern.Length; i++)
        {
            var p = pattern[i].ToString();
            var w = words[i];
            var item1 = map1.GetValueOrDefault(p);
            var item2 = map2.GetValueOrDefault(w);
            if (item1 != null)
            {
                if (item1 != w || item2 != p) return false;
            }
            else
            {
                if (item2 != null) return false;
                map1[p] = w;
                map2[w] = p;
            }
        }
        return true;
    }
}
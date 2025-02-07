public class Solution
{
    public string RemoveStars(string s)
    {
        List<char> chars = new();
        foreach (var c in s)
            if (c == '*')
                chars.RemoveAt(chars.Count - 1);
            else
                chars.Add(c);

        return string.Join("", chars);
    }
}
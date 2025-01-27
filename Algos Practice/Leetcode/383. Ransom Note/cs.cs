public class Solution
{
    public bool CanConstruct(string ransomNote, string magazine)
    {
        Dictionary<char, int> ransomDict = new();
        Dictionary<char, int> magDict = new();
        foreach (var c in ransomNote)
        {
            if (ransomDict.ContainsKey(c))
            {
                ransomDict[c]++;
            }
            else
            {
                ransomDict.Add(c, 1);
            }
        }
        foreach (var c in magazine)
        {
            if (magDict.ContainsKey(c))
            {
                magDict[c]++;
            }
            else
            {
                magDict.Add(c, 1);
            }
        }
        foreach (var c in ransomDict)
        {
            if (!magDict.ContainsKey(c.Key) || magDict[c.Key] < c.Value)
            {
                return false;
            }
        }
        return true;
    }
}
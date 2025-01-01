public class Solution {
    public bool IsAnagram(string s, string t) {
        var dict1 = new Dictionary<char, int>();
        var dict2 = new Dictionary<char, int>();
        foreach (var c in s) {
            if (dict1.ContainsKey(c)) {
                dict1[c]++;
            } else {
                dict1.Add(c, 1);
            }
        }
        foreach (var c in t) {
            if (dict2.ContainsKey(c)) {
                dict2[c]++;
            } else {
                dict2.Add(c, 1);
            }
        }
        foreach (var key in dict1.Keys) {
            if (!dict2.ContainsKey(key) || dict1[key] != dict2[key]) {
                return false;
            }
        }
        foreach (var key in dict2.Keys) {
            if (!dict1.ContainsKey(key) || dict1[key] != dict2[key]) {
                return false;
            }
        }
        return true;
    }
}
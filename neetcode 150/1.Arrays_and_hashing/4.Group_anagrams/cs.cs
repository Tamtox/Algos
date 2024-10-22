public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        var dict = new Dictionary<string, List<string>>();
        foreach (var str in strs) {
            var key = new string(str.OrderBy(c => c).ToArray());
            if (!dict.ContainsKey(key)) {
                dict[key] = new List<string>();
            }
            dict[key].Add(str);
        }
        var result = new List<IList<string>>();
        foreach (var pair in dict) {
            result.Add(pair.Value);
        }
        return result;
    }
}
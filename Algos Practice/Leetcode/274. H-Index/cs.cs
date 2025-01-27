public class Solution
{
    public int HIndex(int[] citations)
    {
        if(citations.Length == 0)
        {
            return 0;
        }
        Array.Sort(citations);
        var result = 0;
        for(var i = 0; i < citations.Length; i++)
        {
            if(citations.Length - i <= citations[i])
            {
                result = Math.Max(result, citations.Length - i);
            }
        }
        return result;
    }
}
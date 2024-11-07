public class Solution {
    private bool SearchRow(int[] row, int target) {
        int left = 0;
        int right = row.Length - 1;
        while (left <= right)
        {
            int mid = (int)Math.Ceiling((left + right) / 2.0);
            if (row[mid] == target)
            {
                return true;
            } else if (target < row[mid])
            {
                right = mid - 1;
            } else
            {
                left = mid + 1;
            }
        }
        return false;
    }
    public bool SearchMatrix(int[][] matrix, int target) {
        foreach(var row in matrix)
        {
            int start = row[0];
            if(start == target)
            {
                return true;
            }
            int end = row[^1];
            if(end == target)
            {
                return true;
            }
            if(start < target && end > target)
            {
                if(SearchRow(row, target))
                {
                    return true;
                }
            }
        }
        return false;
    }
}
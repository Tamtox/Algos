public class Solution
{
    public void SetZeroes(int[][] matrix)
    {
        Dictionary<int, bool> rows = new();
        Dictionary<int, bool> cols = new();
        for (int i = 0; i < matrix.Length; i++)
        {
            for (int j = 0; j < matrix[i].Length; j++)
            {
                if (matrix[i][j] == 0)
                {
                    rows[i] = true;
                    cols[j] = true;
                }
            }
        }
        for (int i = 0; i < matrix.Length; i++)
        {
            if (rows.ContainsKey(i))
            {
                for (int j = 0; j < matrix[i].Length; j++)
                {
                    matrix[i][j] = 0;
                }
            }
        }
        for (int i = 0; i < matrix[0].Length; i++)
        {
            if (cols.ContainsKey(i))
            {
                for (int j = 0; j < matrix.Length; j++)
                {
                    matrix[j][i] = 0;
                }
            }
        }
    }
}
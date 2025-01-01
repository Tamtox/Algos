public class Solution {
    public int FindClosest(TreeNode node, int currVal, double target)
    {
        if (node == null)
        {
            return currVal;
        }
        int val = node.val;
        if (node.left != null)
        {
            int left = FindClosest(node.left, 0, target);
            double diffVal = Math.Abs(val - target);
            double diffLeft = Math.Abs(left - target);
            if (diffLeft < diffVal)
            {
                val = left;
            } else if (diffLeft == diffVal)
            {
                val = Math.Min(val, left);
            }
        }
        if (node.right != null)
        {
            int right = FindClosest(node.right, 0, target);
            double diffVal = Math.Abs(val - target);
            double diffRight = Math.Abs(right - target);
            if (diffRight < diffVal)
            {
                val = right;
            } else if (diffRight == diffVal)
            {
                val = Math.Min(val, right);
            }
        }
        return val;
    }
    public int ClosestValue(TreeNode root, double target) {
        if (root == null)
        {
            return 0;
        }
        return FindClosest(root, 0, target);
    }
}
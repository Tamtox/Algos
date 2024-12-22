public class Solution {
    public bool IsSymmetric(TreeNode root) {
        if(root == null)
        {
            return true;
        }
        List<TreeNode> queueLeft = new (){root.left};
        List<TreeNode> queueRight = new (){root.right};
        while (queueLeft.Count > 0 && queueRight.Count > 0)
        {
            TreeNode left = queueLeft[0];
            TreeNode right = queueRight[0];
            queueLeft.RemoveAt(0);
            queueRight.RemoveAt(0);
            if(left == null && right == null)
            {
                continue;
            }
            if(left == null || right == null)
            {
                return false;
            }
            if(left.val != right.val)
            {
                return false;
            }
            queueLeft.Add(left.left);
            queueLeft.Add(left.right);
            queueRight.Add(right.right);
            queueRight.Add(right.left);
        }
        return true;
    }
}
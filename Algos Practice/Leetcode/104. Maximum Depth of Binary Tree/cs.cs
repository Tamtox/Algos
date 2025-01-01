public class Solution {
    public int dfs(TreeNode node, int num) {
        if(node == null) {
            return num;
        }
        num++;
        return Math.Max(dfs(node.left, num), dfs(node.right, num));
    }
    public int MaxDepth(TreeNode root) {
        return dfs(root, 0);
    }
}
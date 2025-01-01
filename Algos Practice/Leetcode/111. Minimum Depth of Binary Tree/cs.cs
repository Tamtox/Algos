/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
  public int dfs(TreeNode node, int num) {
    num++;
    if(node.left == null && node.right == null) {
      return num;
    }
    if(node.left == null) {
      return dfs(node.right, num);
    }
    if(node.right == null) {
      return dfs(node.left, num);
    }
    return Math.Min(dfs(node.right, num), dfs(node.left, num));
  }
    public int MinDepth(TreeNode root) {
        if(root == null) {
          return  0;
        }
        if(root.left == null && root.right == null) {
          return 1;
        }
        if(root.right == null) {
          return dfs(root.left, 1);
        }
        if(root.left == null) {
          return dfs(root.right, 1);
        }
        return Math.Min(dfs(root.right, 1), dfs(root.left, 1));
    }
}
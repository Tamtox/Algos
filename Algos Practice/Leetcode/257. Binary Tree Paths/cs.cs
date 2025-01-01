public class Solution {
    public void findPaths(TreeNode root, string path, List<string> paths)
    {
        path += root.val.ToString();
        if (root.left == null && root.right == null)
        {
            paths.Add(path);
            return;
        }

        if (root.left != null)
        {
            findPaths(root.left, path + "->", paths);
        }

        if (root.right != null)
        {
            findPaths(root.right, path + "->", paths);
        }
    }

    public IList<string> BinaryTreePaths(TreeNode root) {
        if(root == null) {
          return new List<string>();
        }
        if(root.left == null && root.right == null) {
            return new List<string> { root.val.ToString() };
        }
        List<string> paths = new List<string>();
        string path = root.val.ToString() + "->";
        if (root.left != null)
        {
            findPaths(root.left, path, paths);
        }
        if (root.right != null)
        {
            findPaths(root.right, path, paths);
        }
        return paths;
    }
}
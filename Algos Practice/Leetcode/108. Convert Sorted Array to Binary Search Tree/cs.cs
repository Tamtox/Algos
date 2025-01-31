public class Solution
{
    public TreeNode SortedArrayToBST(int[] nums)
    {
        if (nums.Length == 0) return null;

        if (nums.Length == 1) return new TreeNode(nums[0]);
        var mid = nums.Length / 2;
        var root = new TreeNode(nums[mid]);
        root.left = SortedArrayToBST(nums[0..mid]);
        var left = mid + 1;
        root.right = SortedArrayToBST(nums[left..]);
        return root;
    }
}
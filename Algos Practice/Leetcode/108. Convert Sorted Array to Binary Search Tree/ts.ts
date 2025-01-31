class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }
  const mid = Math.floor(nums.length / 2);
  const head = new TreeNode(nums[mid]);
  head.left = sortedArrayToBST(nums.slice(0, mid));
  head.right = sortedArrayToBST(nums.slice(mid + 1));
  return head;
}

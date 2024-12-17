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
  const mid = Math.floor(nums.length / 2);
  const head = new TreeNode(nums[mid]);
  let left: TreeNode | null = null;
  let right: TreeNode | null = null;
  let leftIndex = mid;
  return head;
}

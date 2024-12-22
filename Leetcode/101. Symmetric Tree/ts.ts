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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  const queueLeft: (TreeNode | null)[] = [root.left];
  const queueRight: (TreeNode | null)[] = [root.right];
  while (queueLeft.length > 0 || queueRight.length > 0) {
    const node1 = queueLeft.shift() as TreeNode;
    const node2 = queueRight.shift() as TreeNode;
    if (node1 === null && node2 === null) {
      continue;
    }
    if (node1 === null || node2 === null) {
      return false;
    }
    if (node1.val !== node2.val) {
      return false;
    }
    queueLeft.push(node1.left || null);
    queueLeft.push(node1.right || null);
    queueRight.push(node2.right || null);
    queueRight.push(node2.left || null);
  }
  return true;
}

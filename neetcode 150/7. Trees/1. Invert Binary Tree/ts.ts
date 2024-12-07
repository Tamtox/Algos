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

// Recursive
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}

// Iterative
// function invertTree(root: TreeNode | null): TreeNode | null {
//   if (!root) {
//     return root;
//   }
//   const queue: TreeNode[] = [root];
//   while (queue.length) {
//     const node = queue.shift();
//     const left = node.left;
//     node.left = node.right;
//     node.right = left;
//     if (node.left) {
//       queue.push(node.left);
//     }
//     if (node.right) {
//       queue.push(node.right);
//     }
//   }
//   return root;
// }

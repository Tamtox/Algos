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
// function invertTree(root: TreeNode | null): TreeNode | null {
//   if (!root) {
//     return root;
//   }
//   const left = invertTree(root.left);
//   const right = invertTree(root.right);
//   root.left = right;
//   root.right = left;
//   return root;
// }

// Iterative
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }
  let queue: TreeNode[] = [root];
  let level: TreeNode[] = [];
  let index = 0;
  while (index < queue.length) {
    const node = queue[index];
    if (node?.left) {
      level.push(node.left);
    }
    if (node?.right) {
      level.push(node.right);
    }
    if (index === queue.length - 1) {
      for (let i = 0; i < Math.floor(level.length / 2); i++) {
        const temp = level[i].val;
        level[i].val = level[level.length - 1 - i].val;
        level[level.length - 1 - i].val = temp;
      }
      queue = [...level];
      level = [];
      index = -1;
    }
    index++;
  }
  return root;
}

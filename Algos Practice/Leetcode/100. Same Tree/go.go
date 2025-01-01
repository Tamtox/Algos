
type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func isSameTree(p *TreeNode, q *TreeNode) bool {
	queue1:=[]*TreeNode{p}
	queue2:=[]*TreeNode{q}
	for len(queue1) > 0 {
		node1:=queue1[0];
		queue1 = queue1[1:]
		node2:=queue2[0];
		queue2 = queue2[1:]
		if node1 == nil && node2 !== nil {
			return false;
		}
		if node2 == nil && node1 !== nil {
			return false;
		}
		if node1 == nil && node2 == nil {
			continue;
		}
		if node1.Val != node2.Val {
			return false;
		}
		if node1.Left != nil {
      if node2.Left == nil {
        return false;
      }
      queue1 = append(queue1, node1.Left)
    }
    if node1.Right != nil {
      if node2.Right == nil {
        return false;
      }
      queue1 = append(queue1, node1.Right)
    }
    if node2.Left != nil {
      if node1.Left == nil {
        return false;
      }
      queue2 = append(queue2, node2.Left)
    }
    if node2.Right != nil {
      if node1.Right == nil {
        return false;
      }
      queue2 = append(queue2, node2.Right)
    }
	}
  return true;
}
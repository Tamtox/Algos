/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func reorderList(head *ListNode) {
	nodes := make([]*ListNode, 0)
	curr := head
	for curr != nil {
		nodes = append(nodes, curr)
		curr = curr.Next
	}
	if len(nodes) < 3 {
		return
	}
	mid := (len(nodes) + 1) / 2
	for i := 0; i < mid; i++ {
		if i == mid-1 {
			if mid%2 == 0 {
				node := nodes[i]
				next := nodes[len(nodes)-1-i]
				node.Next = next
				next.Next = nil
			} else {
				node := nodes[i]
				node.Next = nil
			}
			break
		}
		node := nodes[i]
		next := nodes[i+1]
		newNext := nodes[len(nodes)-1-i]
		node.Next = newNext
		newNext.Next = next
	}
}
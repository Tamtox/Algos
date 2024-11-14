/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func removeNthFromEnd(head *ListNode, n int) *ListNode {
	nodes:= make([]*ListNode,0)
	curr:=head;
	for curr != nil {
		nodes = append(nodes, curr)
		curr = curr.Next;
	}
	if n == len(nodes) {
		return nodes[1]
	} else if n == 1 {
		nodes[len(nodes)-2].Next = nil
	} else {
		nodes[len(nodes)-n-1].Next = nodes[len(nodes)-n+1]
	}
	return head;
}
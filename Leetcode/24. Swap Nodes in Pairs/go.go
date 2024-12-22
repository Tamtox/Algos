
type ListNode struct {
    Val int
    Next *ListNode
}

func swapPairs(head *ListNode) *ListNode {
  if(head == nil) {
		return head;
	}
	nodes:=make([]*ListNode, 0)
	start:= head;
	for start != nil {
		nodes = append(nodes, start)
		start = start.next
	}
}
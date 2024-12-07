func deleteNode(node *ListNode) {
  next := node.Next
	if next != nil {
		node.Val = next.Val;
		afterNext := next.Next;
		node.Next = nil;
		if afterNext != nil {
			node.Next = afterNext;
		} 
	}
}
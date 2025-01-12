
type ListNode struct {
    Val int
    Next *ListNode
}

 func deleteDuplicates(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}
	if head.Next == nil {
		return head
	}
    left:=head
		right:=left.Next
		newItems:= make([]*ListNode, 0);
		for right != nil {
			if left.Val != right.Val {
				if left.Next == right {
					newItems = append(newItems, left)
				}
				left = right
			}
			if right.Next == nil && left == right {
				newItems = append(newItems, left)
			}
			right = right.Next
		}
		length:= len(newItems)	
		for i:= 0; i < length; i++ {
			if(i == length - 1) {
				newItems[i].Next = nil
			} else {
				newItems[i].Next = newItems[i + 1]
			}
		}
		if length > 0 {
			return newItems[0]
		} else {
			return nil;
		}
 }
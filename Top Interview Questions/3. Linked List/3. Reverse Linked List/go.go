/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func reverseList(head *ListNode) *ListNode {
	list:=make([]int,0);
	current:=head;
	for current!=nil{
		list=append(list,current.Val);
		current=current.Next;
	}
	current=head;
	for i:=len(list)-1;i>=0;i--{
		current.Val=list[i];
		current=current.Next;
	}
	return head;
}
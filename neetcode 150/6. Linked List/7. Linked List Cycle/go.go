/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func hasCycle(head *ListNode) bool {
    set:=make(map[*ListNode]bool)
		curr:=head
		for curr!=nil{
			if _,ok:=set[curr];ok{
				return true
			}
			set[curr]=true
			curr=curr.Next
		}
		return false;
}
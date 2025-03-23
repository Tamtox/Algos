package structures

type ListNode struct {
	Val  int
	Next *ListNode
}

func LinkedListM() {
	head := &ListNode{Val: 1}
	nums := []int{2, 3, 4, 5}
	for _, num := range nums {
		newNode := &ListNode{Val: num}
		head.Next = newNode
		head = newNode
	}
}

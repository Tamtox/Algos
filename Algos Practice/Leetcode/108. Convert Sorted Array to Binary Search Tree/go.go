
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sortedArrayToBST(nums []int) *TreeNode {
	length := len(nums)
	if length == 0 {
		return nil
	}
	if length == 1 {
		return &TreeNode{Val: nums[0]}
	}
	mid := length / 2
	head := &TreeNode{Val: nums[mid]}
	head.Left = sortedArrayToBST(nums[:mid])
	head.Right = sortedArrayToBST(nums[mid+1:])
	return head
}
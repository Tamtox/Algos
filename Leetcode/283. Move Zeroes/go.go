func moveZeroes(nums []int)  {
	numsLen:=len(nums)
	if numsLen < 2 {
		return
	}
	left:=0
	right:=0
	for right < numsLen {
		if nums[right] != 0 {
			nums[left] = nums[right]
			left++
		}
		right++
	}
	for left < numsLen {
		nums[left] = 0
		left++
	}
}
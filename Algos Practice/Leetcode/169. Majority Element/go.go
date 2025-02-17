func majorityElement(nums []int) int {
	numsLen := len(nums)
	if numsLen < 1 {
		return 0
	}
	element := nums[0]
	count := 1
	if numsLen < 2 {
		return element
	}
	for i := 1; i < numsLen; i++ {
		if nums[i] == element {
			count++
		} else {
			if count == 1 {
				element = nums[i]
				count = 1
			} else {
				count--
			}
		}
	}
	return element
}
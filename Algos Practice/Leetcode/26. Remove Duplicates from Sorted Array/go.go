func removeDuplicates(nums []int) int {
	numsLen := len(nums)
	numsCpy := make([]int, numsLen)
	copy(numsCpy, nums)
	index := 0
	for i := 0; i < numsLen; i++ {
		if index > 0 && numsCpy[i] == nums[index-1] {
			continue
		}
		nums[index] = numsCpy[i]
		index++
	}
	return index
}
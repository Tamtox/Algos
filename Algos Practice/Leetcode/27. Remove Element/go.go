func removeElement(nums []int, val int) int {
	numsLen := len(nums)
	numsCpy := make([]int, numsLen)
	copy(numsCpy, nums)
	index := 0
	for i := 0; i < numsLen; i++ {
		if numsCpy[i] != val {
			nums[index] = numsCpy[i]
			index++
		}
	}
	return index
}
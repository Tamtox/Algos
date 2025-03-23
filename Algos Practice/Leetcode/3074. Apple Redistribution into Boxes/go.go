func minimumBoxes(apple []int, capacity []int) int {
	sum := 0
	for _, val := range apple {
		sum += val
	}
	sort.Ints(capacity)
	result := 0
	for i := len(capacity) - 1; i >= 0; i-- {
		if sum <= 0 {
			break
		}
		if sum < capacity[i] {
			result++
			break
		}
		sum -= capacity[i]
		result++
	}
	return result
}
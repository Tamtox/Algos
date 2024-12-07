
func twoSum(nums []int, target int) []int {
	dict := make(map[int]int)
	for i, num := range nums {
			diff := target - num;
			val, ok := dict[diff];
			if ok {
					return []int{val, i}
			} else {
					dict[num] = i
			}
	}
	return []int{0, 1}
}

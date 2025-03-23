package structures

import "sort"

func SliceM() {
	// Slice is a reference type that holds a sequence of elements
	// SLice has size and capacity. Size is the number of elements in the slice and capacity is the number of elements in the underlying array
	// Slice is a reference to an underlying array
	nums := []int{1, 2, 3, 4, 5}
	// Sort slice
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})
}

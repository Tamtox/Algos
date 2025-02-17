func merge(nums1 []int, m int, nums2 []int, n int) {
	nums1Cpy := make([]int, m)
	copy(nums1Cpy, nums1)
	i := 0
	j := 0
	index := 0
	for i < m && j < n {
		if nums1Cpy[i] <= nums2[j] {
			nums1[index] = nums1Cpy[i]
			i++
		} else {
			nums1[index] = nums2[j]
			j++
		}
		index++
	}
	for i < m {
		nums1[index] = nums1Cpy[i]
		i++
		index++
	}
	for j < n {
		nums1[index] = nums2[j]
		j++
		index++
	}
}
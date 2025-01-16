func findThePrefixCommonArray(A []int, B []int) []int {
	set1 := make(map[int]int)
	set2 := make(map[int]int)
	result := make([]int, 0)
	for i := 0; i < len(A); i++ {
		count := 0
		if A[i] == B[i] {
			count += 1
		} else {
			if set1[B[i]] > 0 {
				count += 1
			}
			if set2[A[i]] > 0 {
				count += 1
			}
		}
		if i > 0 {
			count += result[len(result)-1]
		}
		result = append(result, count)
		set1[A[i]] = 1
		set2[B[i]] = 1
	}
	return result
}

func merge(intervals [][]int) [][]int {
  sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
	result:= make([][]int, 0)
	index:= 0
	for i:=0; i < len(intervals); i++ {
		if len(result) < 1 {
			result = append(result, intervals[i])
		} else {
			curr:= intervals[i]
			currResult:= result[index]
			if(curr[0] <= currResult[1]) {
				result[index][1] = max(curr[1], currResult[1])
			} else {
				result = append(result, curr)
				index++
			}
		}
	}
	return result;
}

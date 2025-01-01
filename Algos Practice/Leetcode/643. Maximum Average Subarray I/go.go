func findMaxAverage(nums []int, k int) float64 {
    numsLen:=len(nums)
		if numsLen < 2 {
			return nums[0];
		}
		start:=0
		end:= start + k
		sum = 0;
		for i = 0; i < k; i++ {
			sum+=nums[i];
		}
		max = 
}
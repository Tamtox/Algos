package main

func productExceptSelf(nums []int) []int {
	numsLen:= len(nums)
	leftToRight := make([]int, numsLen)
	rightToLeft := make([]int, numsLen)
	mult := 1
	for i:=0; i < numsLen; i++ {
		mult *= nums[i]
		leftToRight[i] = mult
	}
	mult=1
	for i:=numsLen - 1; i>=0; i-- {
		mult *= nums[i];
		rightToLeft[i] = mult;
	}
	result := make([]int, numsLen)
	for i:=0; i < numsLen; i++ {
		if(i == 0) {
			result[i] = rightToLeft[i + 1]
		} else if i == numsLen - 1 {
			result[i] = leftToRight[i - 1]
		} else {
			result[i] = leftToRight[i - 1] * rightToLeft[i + 1]
		}
	}
	return result
}
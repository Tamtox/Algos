func minSubArrayLen(target int, nums []int) int {
  numsLen:= len(nums)
	if numsLen < 1 {
		return 0
	}
	minLen:=0
	left:=0
	right:=1
	current:=nums[left]
	for left < numsLen {
		numLeft:=nums[left]
		numRight:=nums[right]
		if right >= numsLen && current < target {
			break;
		}
		if current >= target {
			if minLen == 0 {
				minLen = right - left
			} else {
				minLen = min(minLen, right - left)
			}
			current = current - numLeft
			left++;
		} else {
			current = current + numRight
			right++
		}
	}
	return minLen
}
func moveZeroes(nums []int)  {
    index:=0;
		ptr:=0;
		numsLen:=len(nums);
		for ptr < numsLen {
			if nums[ptr] != 0 {
				nums[index] = nums[ptr]
				index++;
			}
			ptr++;
		}
		for index < numsLen {
			nums[index] = 0
			index++;
		}
}
	func rotate(nums []int, k int)  {
			offset := k;
			numsLen:= len(nums)
			if k >= numsLen {
				offset = offset % numsLen; 
			}
			numsCopy:=make([]int, numsLen);
			for i:=0;i<numsLen;i++{
				numsCopy[i] = nums[i]
			}
			for i:=0;i<numsLen;i++ {
				newIndex:= i + offset;
				if newIndex >= numsLen {
					newIndex = newIndex - numsLen
				}
				nums[newIndex] = numsCopy[i];
			}
	}
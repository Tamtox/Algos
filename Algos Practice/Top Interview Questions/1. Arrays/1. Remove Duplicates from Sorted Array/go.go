	func removeDuplicates(nums []int) int {
			if len(nums) <= 1 {
				return len(nums)
			}
			insertion:=1;
			left:=0;
			right:=1;
			for right < len(nums) {
				if nums[right] != nums[left] {
					nums[insertion] = nums[right];
					insertion++;
					left = right;
				}
				right++;
			}
			nums=nums[:insertion];
			return len(nums)
	}
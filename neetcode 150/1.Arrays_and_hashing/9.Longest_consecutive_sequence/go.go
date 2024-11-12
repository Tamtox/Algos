func longestConsecutive(nums []int) int {
		if(len(nums) == 0) {
			return 0;
		}
    dict := make(map[int]bool)
		for _, num := range nums {
			dict[num] = true;
		}
		longest:=1
		for _, num := range nums {
			prev:= dict[num - 1];
			if(prev == true) {
				continue;
			}
			next:= dict[num + 1];
			count:=1;
			for next {
				count++;
				num++;
				next = dict[num + 1];
			}
			if(count>longest) {
				longest = count;
			}
		}
		return longest;
}
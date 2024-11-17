package main

import "sort"

func topKFrequent(nums []int, k int) []int {
  dict:= make(map[int]int)
	for _, num:= range nums {
		item, ok := dict[num];
		if(ok) {
			dict[num] = item + 1
		} else {
			dict[num] = 1
		}
	}
	list := []int{}
	for key, _ := range dict {
		list = append(list, key)
	}
	sort.Slice(list, func(i, j int) bool {
		return dict[list[i]] > dict[list[j]]
	})
	return list[:k]
}
package main

import (
	"unicode"
)

func isPalindrome(s string) bool {
	list := make([]rune, 0)
	for _, v := range s {
		c := unicode.ToLower(v)
		if (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') {
			list = append(list, c)
		}
	}
	res := true
	for i := 0; i < len(list)/2; i++ {
		if list[i] != list[len(list)-1-i] {
			res = false
			break
		}
	}
	return res
}
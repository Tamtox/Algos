import (
	"strings"
)

func lengthOfLongestSubstring(s string) int {
	sLen := len(s)
	if sLen < 1 {
		return 0
	}
	if sLen < 2 {
		return 1
	}
	result := 1
	left := 0
	right := 1
	subStr := string(s[0])
	for right < sLen {
		if strings.Contains(subStr, string(s[right])) {
			subStr = strings.Replace(subStr, string(s[left]), "", 1)
			left++
		} else {
			subStr += string(s[right])
			right++
			if len(subStr) > result {
				result = len(subStr)
			}
		}
	}
	return result
}

import (
	"strings"
)

func wordPattern(pattern string, s string) bool {
	map1 := make(map[string]string)
	map2 := make(map[string]string)
	words := strings.Split(s, " ")
	patternLen := len(pattern)
	wordsLen := len(words)
	if patternLen != wordsLen {
		return false
	}
	for i := 0; i < patternLen; i++ {
		map1Item := map1[string(pattern[i])]
		map2Item := map2[words[i]]
		if map1Item != "" {
			if map1Item != words[i] || map2Item != string(pattern[i]) {
				return false
			}
		} else {
			if map2Item != "" {
				return false
			}
			map1[string(pattern[i])] = words[i]
			map2[words[i]] = string(pattern[i])
		}
	}
	return true
}
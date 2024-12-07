
func firstUniqChar(s string) int {
	hashMap:= make(map[rune][]int)
	for i:=0; i < len(s); i++ {
		char := rune(s[i])
		mapChar := hashMap[char]
		if mapChar == nil {
			hashMap[char] = []int{i}
		} else {
			hashMap[char] = append(mapChar, i)
		}
	}
	for i:=0; i < len(s); i++ {
		char := rune(s[i])
		if len(hashMap[char]) == 1 {
			return i
		}
	}
	return -1;
}
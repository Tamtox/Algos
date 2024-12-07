func strStr(haystack string, needle string) int {
	if haystack == needle  {
		return 0;
	}
	haystackLen:= len(haystack)
	needleLen:= len(needle)
	if needleLen > haystackLen {
		return -1
	}
	for i:= 0; i < haystackLen - needleLen + 1; i++ {
		char:= haystack[i]
		if char == needle[0] {
			if haystack[i:i+needleLen] == needle {
				return i
			}
		}
	}
	return -1
}
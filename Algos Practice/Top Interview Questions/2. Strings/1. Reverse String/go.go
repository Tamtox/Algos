func reverseString(s []byte)  {
    length:=len(s)
		mid:=length / 2
		for i:=0; i < mid; i++ {
			char:=s[i]
			s[i] = s[length - 1 - i]
			s[length - 1 - i] = char;
		}
}
func plusOne(digits []int) []int {
    curry:=0
		digitsLen:=len(digits)
		for i:=digitsLen - 1; i>=0; i-- {
			num:=digits[i];
			newNum:=num+curry;
			if i == digitsLen - 1 {
				newNum++;
			}
			if newNum > 9 {
				curry = newNum / 10;
				newNum = newNum % 10;
			} else {
				curry = 0;
			}
			digits[i] = newNum;
		}
		if curry > 0 {
			return append([]int{curry}, digits...)
		}
		return digits;
}
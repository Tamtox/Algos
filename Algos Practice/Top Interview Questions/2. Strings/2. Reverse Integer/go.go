func reverse(x int) int {
	if x == 0 {
		return 0
	}
	isNegative:= false;
	if x < 0 {
		isNegative = true;
		x = -x;
	}
	numStr:="";
	for x > 0 {
		num:= x % 10
		numStr = numStr + strconv.Itoa(num);
		x = x / 10;
	}
	index:=0;
	for index < len(numStr) {
		if numStr[index] != '0' {
			break;
		}
		index++;
	}
	numStr = numStr[index:];
	result, _:= strconv.Atoi(numStr);
	limit:= math.Pow(2, 31);
	if float64(result) > limit || float64(result) < -limit {
		return 0;
	}
	if isNegative {
		result = -result;
	}
	return result;
}
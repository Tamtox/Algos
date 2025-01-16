func readInput() {
	var linesAmount int
	in := bufio.NewReader(os.Stdin)
	fmt.Fscanln(in, &linesAmount)
	nums := make([]int, linesAmount)
	for i := 0; i < linesAmount; i++ {
		fmt.Fscanln(in, &(nums[i]))
	}S
}

func asteroidCollision(asteroids []int) []int {
	result := make([]int, 0)
	for i := 0; i < len(asteroids); i++ {
		asteroid := asteroids[i]
		if asteroid > 0 {
			result = append(result, asteroid)
		} else {
			if len(result) < 1 {
				result = append(result, asteroid)
			} else {
				isValid := true
				for isValid {
					item := result[len(result)-1]
					if item < 0 {
						result = append(result, asteroid)
						isValid = false
					} else {
						if item == -asteroid {
							result = result[:len(result)-1]
							isValid = false
						} else if item > -asteroid {
							isValid = false
						} else {
							result = result[:len(result)-1]
						}
					}
				}
			}
		}
	}
	return result
}

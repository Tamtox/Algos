package structures

import "fmt"

func EnumM() {
	// Enum is a set of named integer constants
	// Enum is a type that is defined by a set of constants
	// Enum is a group of constants that are assigned integer values
	type Color int
	const (
		Red Color = iota // iota starts at 0
		Green
		Blue
	)
	// Map of values
	colors := map[Color]string{
		Red:   "red",
		Green: "green",
		Blue:  "blue",
	}
	fmt.Println(colors[Red])
	// Can start from a specific value
	const (
		Apple Color = iota + 5
		Banana
		Cherry
	)
}

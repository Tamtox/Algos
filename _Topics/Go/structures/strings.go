package structures

import (
	"strings"
)

func StringsM() {
	// Strings are immutable. Once a string is created, it cannot be changed.
	var str string = "Hello, World!"
	// Prefix and Suffix
	strings.HasPrefix(str, "Hello")  // true
	strings.HasSuffix(str, "World!") // true
	// Contains
	strings.Contains(str, "World") // true
	// Count
	strings.Count(str, "l") // 3
	// Index
	strings.Index(str, "World") // 7
	// Join
	strings.Join([]string{"Hello", "World"}, ", ") // Hello, World
	// Split
	strings.Split(str, ", ") // [Hello World!]
	// TO Lower and Upper
	strings.ToLower(str) // hello, world!
	strings.ToUpper(str) // HELLO, WORLD!
	// Replace
	strings.Replace(str, "World", "Golang", 1) // Hello, Golang!
	// Trim
	strings.Trim("   Hello, World!   ", " ") // Hello, World!
	// Replace all
	strings.ReplaceAll(str, "l", "L") // HeLLo, WorLd!
}

package main

import (
	"fmt"
)

func main() {
	// Constant
	const s string = "asd"
	// Hashmap
	hashMap := make(map[string]string)
	hashMap["name"] = "John"
	hashMap["age"] = "25"
	fmt.Println(hashMap)
}

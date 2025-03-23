package structures

import "fmt"

func MapsM() {
	// Map is a reference type that holds key-value pairs
	// Map is unordered collection of key-value pairs
	// Map is a reference to an underlying hash table
	// Empty map -------------------------------------
	hashMap := make(map[string]int)
	// Add key-value pairs ---------------------------
	hashMap["one"] = 1
	hashMap["two"] = 2
	// Delete key-value pair --------------------------
	delete(hashMap, "one")
	// Get value for key ------------------------------
	val, ok := hashMap["two"]
	fmt.Println(val, ok)
	// Iterate over map ------------------------------
	for key, value := range hashMap {
		fmt.Println(key, value)
	}
	// Clear map -------------------------------------
	cars := map[string]int{
		"BMW":      135000,
		"Mercedes": 150000,
		"Ford":     100000,
	}
	clear(cars)
}

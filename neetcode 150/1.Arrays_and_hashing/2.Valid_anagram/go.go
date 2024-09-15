
package main


func isAnagram(s string, t string) bool {
    if(len(s) != len(t)) {
        return false
    }
    set1:= make(map[rune]int)
    for _, char := range s {
        set1[char]++
    }
    set2:= make(map[rune]int)
    for _, char := range t {
        set2[char]++
    }
    for key, value := range set1 {
        if set2[key] != value {
            return false
        }
    }
    return true
}
package main

import (
	sort "sort"
)
func sortString(str string) string {
    runeStr:=[]rune(str)
    sort.Slice(runeStr, func(i,j int) bool {
        return runeStr[i] < runeStr[j]
    })
    return string(runeStr)
}

func groupAnagrams(strs []string) [][]string {
    anagrams := make(map[string][]string)
    for _, str := range strs {
        key:= sortString(str)
        if _, ok := anagrams[key]; !ok {
            anagrams[key] = []string{str}
        } else {
            anagrams[key] = append(anagrams[key], str)
        }
    }
    result:= make([][]string, 0)
    for _, v := range anagrams {
        result = append(result, v)
    }
    return result
}
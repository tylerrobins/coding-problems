package main

import (
    "fmt"
    "strings"
    "sort"
)

func FindChildren(dancingBrigade string) string{
    lowerDanceBrigade:= strings.ToLower(dancingBrigade)
    vals := make(map[rune]int)
    
    for _, r := range lowerDanceBrigade{
        if _, ok := vals[r]; !ok {
            vals[r] = -1
        }
        vals[r]++
    }
    keys := make([]rune, 0, len(vals))
    for ru := range vals {
        keys = append(keys, ru)
    }
    sort.Slice(keys, func(i, j int) bool {
        return keys[i] < keys[j]
    })
    result := make([]string, len(vals))

    for i, ru := range keys {
        parent := strings.ToUpper(string(ru))
        children := strings.Repeat(string(ru), vals[ru])
        result[i] = parent + children
    }
    return strings.Join(result, "") 
}

func main() {
    fmt.Println(FindChildren("abBA")) 
    fmt.Println(FindChildren("AaaaaZazzz")) 
    fmt.Println(FindChildren("CbcBcbaA")) 
    fmt.Println(FindChildren("xXfuUuuF")) 
    fmt.Println(FindChildren("")) 
}

package main

import (
    "fmt"
    "strings"
    "unicode"
)

func Order(sentence string) string {
    sentSlice := strings.Split(sentence, " ")
    result := make([]string, len(sentSlice), len(sentSlice))
    for _, w := range sentSlice {
        for _, r := range w {
            if unicode.IsNumber(r) {
                index := int(r - '1')
                result[index] = w
                break 
            }
        }
    }
    return strings.Join(result, " ") 
}

func main() {
    fmt.Println(Order("is2 Thi1s T4est 3a"),"  -->  Thi1s is2 3a T4est")
    fmt.Println(Order("4of Fo1r pe6ople g3ood th5e the2"),"  -->  Fo1r the2 g3ood 4of th5e pe6ople")
}

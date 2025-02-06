package main

import (
    "strings"
    "fmt"
)

func Scale(s string, k, n int ) string {
    if s == "" {
        return ""
    }
    strSlice := strings.Split(s, "\n")
    result := make([]string,len(strSlice) * n)
    index := 0
    for _, str := range strSlice {
        outputStr := ""
        for _, i := range str {
            for x := 0; x < k; x++ {
                outputStr += string(i) 
            }
        }
        for y := 0; y < n; y++ {
            result[index] = outputStr
            index++
        }
    }
    return strings.Join(result,"\n")
}

func main(){
    d := "abcd\nefgh\nijkl\nmnop"
    s := "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"

    output := Scale(d,2,3) 

    fmt.Println(s == output)
    fmt.Println(output)
}

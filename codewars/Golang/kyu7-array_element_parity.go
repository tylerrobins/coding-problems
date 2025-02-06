package main

import "fmt"

func Solve(arr []int) int {
    for i, x := range arr {
        inverseFound := false
        for j, y := range arr {
            if i == j {
                continue
            }
            if x * -1 == y {
               inverseFound = true
                continue
            }
        }
        if !inverseFound {
            return x
        }
    }
    return 0
}

func SimpleSolve(arr []int) int {
    res := 0
    hash := make(map[int]bool)
    for _, val := range arr {
        if _, ok := hash[val]; !ok {
            hash[val] = true
            res += val
        }
    }
    return res
}

func main(){
    fmt.Println(Solve([]int{1,-1,2,-2,3})) 
    fmt.Println(SimpleSolve([]int{1,-1,2,-2,3})) 
    fmt.Println(Solve([]int{-3,1,2,3,-1,-4,-2})) 
    fmt.Println(SimpleSolve([]int{-3,1,2,3,-1,-4,-2})) 
    fmt.Println(Solve([]int{1,-1,2,-2,3,3})) 
    fmt.Println(SimpleSolve([]int{1,-1,2,-2,3,3})) 
    fmt.Println(Solve([]int{-110,110,-38,-38,-62,62,-38,-38,-38})) 
    fmt.Println(SimpleSolve([]int{-110,110,-38,-38,-62,62,-38,-38,-38})) 
    fmt.Println(Solve([]int{-9,-105,-9,-9,-9,-9,105})) 
    fmt.Println(SimpleSolve([]int{-9,-105,-9,-9,-9,-9,105})) 
}

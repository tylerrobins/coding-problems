package main

func ArrayDiff(a, b []int) []int {
    result:= make([]int,0, len(a))
    for _, i := range a {
        inB := false
        for _, j := range b {
            if i == j {
                inB = true
                break
            }
        }
        if !inB {
            result = append(result, i)
        }
    }
    return result
}

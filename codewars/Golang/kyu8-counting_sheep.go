package main 

import ("fmt")

func CountSheeps(numbers []bool) int {
    count := 0
    for _, n := range numbers {
        if n == true {
            count++
        }
    }
  return count
}

func main(){

    test := []bool{true,  true,  true,  false, true,  true,  true,  true ,  true,  false, true,  false,  true,  false, false, true ,  true,  true,  true,  true ,  false, false, true,  true}

    fmt.Println(CountSheeps(test))
}

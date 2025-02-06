package main

import "fmt"

func century(year int) int {
    cent := 0
    for c := 0; c < year; c+= 100 {
       cent++ 
    }  
    return cent
}

func main(){
   fmt.Println(century(1990)) 
   fmt.Println(century(1705)) 
   fmt.Println(century(1900)) 
   fmt.Println(century(1601)) 
   fmt.Println(century(2000)) 
   fmt.Println(century(89)) 
}

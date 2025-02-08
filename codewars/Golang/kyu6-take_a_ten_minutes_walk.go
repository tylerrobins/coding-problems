package main

import "fmt"

func IsValidWalk(walk []rune) bool {
    if len(walk) != 10 {
        return false
    }
    walkMap := map[rune]int{
        'n':0,
        's':0,
        'w':0,
        'e':0,
    }
    for _, r := range walk {
        walkMap[r]++
    }
    if walkMap['n'] == walkMap['s'] && walkMap['w'] == walkMap['e'] {
        return true
    } else {
        return false
    }
}

func main(){
    fmt.Println("['n','n','w','n','w','s','s','e','s','e']:", IsValidWalk([]rune{'n','n','w','n','w','s','s','e','s','e'})) 
}

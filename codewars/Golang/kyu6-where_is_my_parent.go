package main


func FindChildren(dancingBrigade string) string {
    vals := make(map[rune]int)
    for _, r := range dancingBrigade {
        if _, ok := vals[r]; !ok {
            vals[r] = -1
        }
        vals[r]++
    }
  return 
}

func main() {
    
}

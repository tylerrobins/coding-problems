package main 

import ("fmt")

func Greet(name string) string {
  return fmt.Sprintf("Hello, %s how are you doing today?", name)  
}

func main(){
    names := []string{"What", "Who", "Slimshady"}

    for _, name := range names {
       fmt.Println(Greet(name)) 
    }
}

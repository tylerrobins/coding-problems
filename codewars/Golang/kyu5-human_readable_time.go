package main

import (
    "fmt"
)

func HumanReadableTime(seconds int) string {
    secs := seconds % 60
    mins := (seconds % 3600) / 60
    hrs := seconds /3600
    return fmt.Sprintf("%s:%s:%s", helperIntToString(hrs),helperIntToString(mins),helperIntToString(secs))
}


func helperIntToString(t int) string {
    if t < 10 {
        return fmt.Sprintf("0%d", t)
    }
    return fmt.Sprintf("%d", t)
}

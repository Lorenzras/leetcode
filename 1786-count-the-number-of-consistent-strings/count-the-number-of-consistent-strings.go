func countConsistentStrings(allowed string, words []string) int {
    allowedRunes := []rune(allowed)  
    consistentCount := 0

    for _, w := range words {
        consistent := false
        for _, s := range w {
            foundS := false
            for _, a := range allowedRunes {
                if a == s {
                    foundS = true
                    break;
                }
            }
            fmt.Println("Char: " + string(s) + " " + strconv.FormatBool(foundS))
            
            consistent = foundS

            if foundS == false {
                break;
            } 

        }

        if consistent == true {
            fmt.Println(w)
            consistentCount++
        }

    }

    return consistentCount
}
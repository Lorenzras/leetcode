func numJewelsInStones(jewels string, stones string) int {
    
    jewelsInStones := 0
    
    for _, st := range stones {
        for _, jw := range jewels {
            if jw == st {
                jewelsInStones++
            }  
        }
    }

    return jewelsInStones
}
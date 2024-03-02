func defangIPaddr(address string) string {
    defangedAddress := make([]rune, len(address) + 6)
    
    d := 0
    for _, c := range address  {
        if c == 46 {
            defangedAddress[d] = 91
            d++
            defangedAddress[d] = c
            d++
            defangedAddress[d] = 93
        } else {
            defangedAddress[d] = c
        }
        d++
    }

    return string(defangedAddress)
}
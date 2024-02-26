func reverseWords(s string) string {
    words := strings.Split(s, " ")
    reversed := []rune(s)

    idx := 0

    for _, ws := range words {
        wordRunes := []rune(ws)
        for i := len(ws) - 1; i >= 0; i-- {
            reversed[idx] = wordRunes[i]
            idx++
        }

        if idx < len(s)  {
            reversed[idx] = ' '
            idx++
        }

    }
    

    return string(reversed);
}


/* 
Easier



 */
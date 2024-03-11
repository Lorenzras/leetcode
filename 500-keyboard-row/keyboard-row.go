

func findWords(words []string) []string {
    rowStrs := []string{
        "qwertyuiop",
        "asdfghjkl",
        "zxcvbnm",
    }

    rowMaps := make([]map[rune]bool, 3) 

    for i, row := range rowStrs {
        rowMaps[i] = make(map[rune]bool) 
        for _, r := range row {
            rowMaps[i][r] = true

        }
    }

    result := make([]string, 0)

    for _, word := range words {

        for _, rowMap := range rowMaps {
            isMatch := true

            for _, w := range word {
                lowerW := w

                if unicode.IsUpper(w) {
                    lowerW = unicode.ToLower(lowerW)
                }

                _, ok := rowMap[lowerW]
                
                if !ok {
                    isMatch = false
                    break
                }
            }

            if isMatch {
                result = append(result, word)
            } 
        }
 
    }
    
    return result
}
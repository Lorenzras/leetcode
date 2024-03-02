func findWordsContaining(words []string, x byte) []int {
    slice := []int{}
   xs := string(x) 
    for i, w := range words {
        if strings.Contains(w, xs) {
            slice = append(slice, i)
        }
    }

    return slice
}
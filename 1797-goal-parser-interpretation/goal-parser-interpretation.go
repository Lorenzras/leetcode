func interpret(command string) string {
    result := []rune{}

    gRune := 'G'
    openParenRune := '('
    closeParenRune := ')'
    oRune := 'o'
    alRunes := []rune{'a', 'l'}

    var prev rune
    for _, c := range command {
        if c == gRune {
            result = append(result, c)
        } else if c == closeParenRune {
            if prev == openParenRune {
                result = append(result, oRune)
            } else {
                result = append(result, alRunes...)
            }
        }

        prev = c
    }

    return string(result)
 
}
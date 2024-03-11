func customSortString(order string, s string) string {
    slice := make([]int, 26)
    for _, c := range s {
        slice[c-'a']++
    }

    var result strings.Builder
    for _, c := range order {
        result.WriteString(strings.Repeat(string(c), slice[c-'a']))
        slice[c-'a'] = 0
    }

    for i, count := range slice {
        result.WriteString(strings.Repeat(string('a'+i), count))
    }
    // UPVOTE :)
    return result.String()
}
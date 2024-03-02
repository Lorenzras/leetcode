func isPalindrome(s string) bool {
    s = strings.ToLower(s)
    left, right := 0, len(s)-1

    for left < right {
        for left < right && !isAlphanumeric(s[left]) {
            left++
        }

        for left < right && !isAlphanumeric(s[right]) {
            right--
        }

        if s[left] != s[right] {
            return false
        }

        left++
        right--
    }

    return true
}

func isAlphanumeric(char byte) bool {
    if (char >= '0' && char <= '9') || (char >= 'a' && char <= 'z') {
        return true
    }

    return false
}
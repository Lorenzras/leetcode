func isIsomorphic(s string, t string) bool {
    map1 := make(map[byte]byte)
    map2 := make(map[byte]byte)
    for i, _ := range s {
        char1 := s[i];
        char2 := t[i];

        if value, ok := map1[char1]; ok && value != char2 {
            return false
        }

        if value, ok := map2[char2]; ok && value != char1 {
            return false
        }

        map1[char1] = char2;
        map2[char2] = char1;
    }

    return true
}
func pivotInteger(n int) int {
    for i := n / 2; i <= n; i++ {

        if ((i) * (1 + i)) / 2 == ((n - i + 1) * (i + n)) / 2 {
            return i
        } 

    }

    return -1
}
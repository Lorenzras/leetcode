func pivotInteger(n int) int {
    for i := n / 2; i <= n; i++ {
        leftSum := ((i) * (1 + i)) / 2
        rightSum := ((n - i + 1) * (i + n)) / 2

        fmt.Println(i, leftSum, rightSum)

        if leftSum == rightSum {
            return i
        } 

    }

    return -1
}
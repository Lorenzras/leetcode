func singleNumber(nums []int) int {
     result := 0
    for _, num := range nums{
        result ^= num // XOR
    }

    return result
}
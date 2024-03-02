func sortedSquares(nums []int) []int {
    sort.Ints(nums)

    for i, n := range nums {
        nums[i] *= n
    }
    sort.Ints(nums)

    return nums
}
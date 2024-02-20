func missingNumber(nums []int) int {
    sort.Ints(nums)

    for i, k := range nums {
        if i != k {
            return i;
        }
    } 

    return len(nums);
}
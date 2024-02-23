func getConcatenation(nums []int) []int {
    answer := make([]int, len(nums) *2)

    for i, num := range nums {
        answer[i] = num
        answer[i + len(nums)] = num
    }

    return answer;
}
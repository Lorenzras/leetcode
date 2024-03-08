func maxFrequencyElements(nums []int) int {
    grouped := make(map[int]int)

    for _, n := range nums {
        if _, ok := grouped[n]; ok {
            grouped[n]++
        } else {
            grouped[n] = 1
        }
    }

    maxValue := -1 
    instance := 1
    for _, v := range grouped {
        if v > maxValue {
            maxValue = v
            instance = 1
        } else if v == maxValue {
            instance++
        }
    }

    return maxValue * instance
}
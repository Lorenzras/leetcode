function removeDuplicates(nums: number[]): number {
    const sortedNums = Array.from(new Set(nums)).sort((a, b) => a - b);
    nums.forEach((item, idx) => {
        nums[idx] = sortedNums?.[idx]; 
    })


    return sortedNums.length;
};
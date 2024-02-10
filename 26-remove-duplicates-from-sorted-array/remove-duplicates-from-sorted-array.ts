function removeDuplicates(nums: number[]): number {
    const sortedNums = Array.from(new Set(nums)).sort((a, b) => a - b);
    //const expectNums = [1, 2];
    nums.forEach((item, idx) => {
        nums[idx] = sortedNums?.[idx]; 
    })


    return sortedNums.length;
};
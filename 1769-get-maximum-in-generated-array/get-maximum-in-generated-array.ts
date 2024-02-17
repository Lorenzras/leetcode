function getMaximumGenerated(n: number): number {
    if(n === 0){
        return 0
    }
    let nums = [0, 1]
    for (let i = 1; i < n/2; i++) {
        nums[i*2]=nums[i]
        nums[(2*i)+1]=nums[i+1]+nums[i]
    }

    return Math.max(...nums)
};
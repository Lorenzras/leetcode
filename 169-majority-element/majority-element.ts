function majorityElement(nums: number[]): number {
    let k = 0;
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (k === 0) {
            j = nums[i];
        }

        if (nums[i] === j) {
            k++;
        } else {
            k--;
        }
    }
    return j;

};
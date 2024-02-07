
const sumReducer = (sum: number, cur: number) : number => sum + cur;

function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let previousElementsSum = 0;
    let ans = -1;
    for (let num of nums) {
        if (num < previousElementsSum) {
            ans = num + previousElementsSum;
        }
        previousElementsSum += num;
    }
    return ans;
    
};
const parseDigits = (n: number): number => {

    return n.toString().split('').reduce((max, curr) => {
        const num = +curr;
        return num > max ? num : max;
    } , 0);
}

function maxSum(nums: number[]): number {
    const nlen = nums.length;
    let max: number = -1;

    const numsTotalByDigits = nums.map((n) => parseDigits(n)); 

    for(let i = 0; i < nlen; i++) {
        const comparatorSum = parseDigits(nums[i]);

        for(let j = 0; j < nlen; j++){
            if(i === j) continue;
            if(numsTotalByDigits[i] === numsTotalByDigits[j]) {
                const total = nums[i] + nums[j];

                if(total > max) {
                    max = total;
                }
            }
        }
    }

    return max;
};
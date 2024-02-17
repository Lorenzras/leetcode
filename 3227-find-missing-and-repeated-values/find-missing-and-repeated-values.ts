function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const n = grid.length;
    const ans = [0, 0], set = new Set();
    const needSum = (n**2)*(n**2+1)/2;
    let sum = 0;
    for (const row of grid) {
        for (const num of row) {
            if (set.has(num)) ans[0] = num;
            set.add(num);
            sum += num;
        }
    }

    ans[1] = needSum + ans[0] - sum;
    return ans; 
};
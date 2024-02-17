function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    //DESC
    const maxDiffs: number[] = Array(ladders).fill(0);
    function findInfInd(target: number): number {
        if (maxDiffs[maxDiffs.length - 1] >= target) return maxDiffs.length;
        let start = 0;
        let end = maxDiffs.length - 1;
        while (start < end) {
            const mid = (start + end) >> 1;
            if (target >= maxDiffs[mid]) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }

    let diffSum = 0;
    for (let i = 1; i < heights.length; i++) {
        const diff = Math.max(0, heights[i] - heights[i - 1]);
        const infInd = findInfInd(diff);
        if (infInd !== maxDiffs.length) {
            maxDiffs.splice(infInd, 0, diff);
            diffSum += maxDiffs.pop()!;
        } else {
            diffSum += diff;
        }
        if (diffSum > bricks) return i - 1;
    }
    
    return heights.length - 1;
};
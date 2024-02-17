function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    let max = [];
    //let [tempBricks, tempLadders] = [bricks, ladders];

    function sortedIndex(array: number[], value: number) {
        let low = 0,
        high = array.length;

        while (low < high) {
            let mid = (low + high) >>> 1;
            if (array[mid] < value) low = mid + 1;
            else high = mid;
        }
        return low;
    }

    function addDiff(diff: number) {
        if(!ladders) return

        let index = sortedIndex(max, diff)
        max.splice(index, 0, diff);

        if(ladders <= max.length - 1) max.shift()  
    }
    
    function useLadder(temp: number) {
        if(!ladders) return temp

        let diff = max.pop()
        ladders--
        return temp + diff
    }

    for(let i = 0; i < heights.length; i++) {
        let curr = heights[i]
        let next = heights[i+1]
        
		// Jump if smaller building
        if(curr >= next) continue
        
		// Calculate height differece
        let diff = next - curr
		
		// Add the difference in sorted array if max size equal to ladder
        addDiff(diff)
        
		// Use the ladder if required to free up biggest bricks space
        if(bricks < diff) bricks = useLadder(bricks)

		// Subtract bricks
        bricks -= diff

		// Return index. if you run out of bricks
        if(bricks < 0) return i
    }

    return heights.length - 1;
};
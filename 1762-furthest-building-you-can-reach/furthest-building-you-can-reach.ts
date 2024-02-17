function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    let max = []
    let [tempBricks, tempLadders] = [bricks, ladders]

    function sortedIndex(array, value) {
        var low = 0,
        high = array.length;

        while (low < high) {
            var mid = (low + high) >>> 1;
            if (array[mid] < value) low = mid + 1;
            else high = mid;
        }
        return low;
    }

    function addDiff(diff) {
        if(!tempLadders) return

        let index = sortedIndex(max, diff)
        max.splice(index, 0, diff);

        if(tempLadders <= max.length - 1) max.shift()  
    }
    
    function useLadder(temp) {
        if(!tempLadders) return temp

        let diff = max.pop()
        tempLadders--
        return temp + diff
    }

    for(let i = 0; i < heights.length; i++) {
        let curr = heights[i]
        let next = heights[i+1]
        
		// Return if you reach the end
        if(!next) return i
        
		// Jump if smaller building
        if(curr >= next) continue
        
		// Calculate height differece
        let diff = next - curr
		
		// Add the difference in sorted array if max size equal to ladder
        addDiff(diff)
        
		// Use the ladder if required to free up biggest bricks space
        if(tempBricks < diff) tempBricks = useLadder(tempBricks)

		// Subtract bricks
        tempBricks -= diff

		// Return index. if you run out of bricks
        if(tempBricks < 0) return i
    }
};
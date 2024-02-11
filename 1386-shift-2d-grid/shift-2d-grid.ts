function shiftGrid(grid: number[][], k: number): number[][] {
    let flatArr = grid.flat();
    const width = grid[0].length;

    for(let i = 0; i < k; i++){
        flatArr.unshift(flatArr.pop());
    }

    for(let i = 0; i < grid.length; i++){
        const seg = i * width;
        grid[i] = flatArr.slice(seg, seg + width);
    }
    
    return grid;
};
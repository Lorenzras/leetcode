function shiftGrid(grid: number[][], k: number): number[][] {
    const flatArr = grid.flat();
    const width = grid[0].length;

    for(let i = 0; i < k; i++){
        flatArr.unshift(flatArr.pop());
    }

    for(let i = 0; i < grid.length; i++){
        grid[i] = flatArr.slice(i * width, i * width + width);
    }
    
    return grid;
};
function majorityElement(nums: number[]): number {
    const mapNums = new Map();
    let majorityEl = null; 
    let maxCount = 0;
    
    for(let i = 0; i < nums.length; i++){
        
        mapNums.set(nums[i], (mapNums.get(nums[i]) ?? 0) + 1);
        
        if(mapNums.get(nums[i]) > maxCount ){
            maxCount = mapNums.get(nums[i]);
            majorityEl = nums[i];
        }

    }


    return majorityEl;

};
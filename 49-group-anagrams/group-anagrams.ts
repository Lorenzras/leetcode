function groupAnagrams(strs: string[]): string[][] {

    const resultObj = strs.reduce((acc, cur) => {
        const normalized = cur.split('').sort().join('');
        if(!acc.has(normalized)) {
            acc.set(normalized, [cur]);
        } else {
            acc.get(normalized).push(cur);
        }

        return acc; 
    }, new Map<string, string[]>())

    return [...resultObj.values()];  
};
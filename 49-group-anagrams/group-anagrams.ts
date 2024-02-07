function groupAnagrams(strs: string[]): string[][] {

    const resultObj = strs.reduce((acc, cur) => {
        const normalized = cur.split('').sort().join('');
        if(!acc[normalized]) {
            acc[normalized] = [cur]
        } else {
            acc[normalized].push(cur);
        }

        return acc; 
    }, {} as  Record<string, string[]>)

    return Object.values(resultObj);  
};
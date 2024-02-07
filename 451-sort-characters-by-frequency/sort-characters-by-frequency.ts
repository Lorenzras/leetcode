function frequencySort(s: string): string {
    
    const raw = Array
        .from(s)
        .reduce<Record<string, number>>((acc, cur) => {
            if(!acc[cur]){
                acc[cur] = 0;
            }

            acc[cur]++;

            return acc;       
        },{})
    
    const result = Object
        .entries(raw)
        .sort((a, b) => b[1] - a[1] )
        .reduce<string>((acc, curr) => {

            for(let i = 0; i < curr[1]; i++ ){
                acc += curr[0];
            }

            return acc;
        }, '');
    

    return result;
};
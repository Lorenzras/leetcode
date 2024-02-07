
function maximumNumberOfStringPairs(words: string[]): number {
    const wlen = words.length;
    let pairs = 0;
    

    for(let i = 0; i < wlen; i++) {
        if(!words[i]) continue;

        for(let j = 0; j < wlen; j++) {
            if(i == j) continue;
            if(!words[j]) continue;

            if(words[i] === words[j].split('').reverse().join('')){
                words[i] = undefined;
                words[j] = undefined;
                pairs++;
            }
        }
    }

    return pairs;
};
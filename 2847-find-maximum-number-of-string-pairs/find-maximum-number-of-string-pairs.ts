
function maximumNumberOfStringPairs(words: string[]): number {
    const wlen = words.length;
    let pairs = 0;

    for(let i = 0; i < wlen; i++) {
        for(let j = 0; j < wlen; j++) {
            if(i == j) continue;
            if(words[i] === words[j].split('').reverse().join('')){
                pairs++;
            }
        }
    }

    return pairs / 2;
};
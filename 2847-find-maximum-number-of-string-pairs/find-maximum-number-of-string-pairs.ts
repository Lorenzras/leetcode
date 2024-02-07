
function maximumNumberOfStringPairs(words: string[]): number {
    const wlen = words.length;
    let pairs = 0;
    
    const reversedWords = words.map((w) => w.split('').reverse().join(''))

    for(let i = 0; i < wlen; i++) {
        if(!words[i]) continue;

        for(let j = 0; j < wlen; j++) {
            if(i == j) continue;
            if(!words[j]) continue;

            if(words[i] === reversedWords[j]){
                words[i] = undefined;
                words[j] = undefined;
                pairs++;
            }
        }
    }

    return pairs;
};
function repeatedCharacter(s: string): string {

    let letters = [];

    for(let l of s){
        if(letters.includes(l)){
            return l;
        }

        letters.push(l);
        
    }
};
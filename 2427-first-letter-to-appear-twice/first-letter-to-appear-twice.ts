function repeatedCharacter(s: string): string {

    let letters = [];

    for(let i=0; i < s.length; i++){
        if(letters.includes(s[i])){
            return s[i];
        }else{
            letters.push(s[i]);
        }
    }
};
function greatestLetter(ss: string): string {

    const set = [];

    for(let s of ss) {
        const uC = s.toUpperCase()
        if(ss.includes(uC) && ss.includes(s.toLowerCase())){
            set.push(uC.charCodeAt(0));
        }
    }

    if(!set.length) return '';

    return String.fromCharCode(Math.max(...set));
};
function greatestLetter(ss: string): string {

    let curCharCode = 0;

    for(let s of ss) {
        const uC = s.toUpperCase()
        if(ss.includes(uC) && ss.includes(s.toLowerCase())){
            if(uC.charCodeAt(0) > curCharCode){
                curCharCode = uC.charCodeAt(0);
            } 
        }
    }

    if(!curCharCode) return '';
    
    return String.fromCharCode(curCharCode);
};
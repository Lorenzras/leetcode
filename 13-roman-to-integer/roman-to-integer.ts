const map = {
    IV : 4,
    IX : 9,
    XL : 40,
    XC : 90,
    CD : 400,
    CM : 900, 
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000,
}

const keys = Object.keys(map);

function romanToInt(s: string): number {
    let result = 0;
    let inprocess = s;

    while(inprocess){
        for(let k of keys){
            if(inprocess.includes(k)){
                inprocess = inprocess.replace(k, '');
                result += map[k];
                break;
            }
        }
    }

    return result;
};
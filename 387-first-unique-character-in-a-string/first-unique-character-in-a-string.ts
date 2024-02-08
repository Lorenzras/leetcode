function firstUniqChar(str: string): number {
    const strArr = str.split('');
    const strArrLen = strArr.length;
    let idx = -1;

    for(let i = 0; i < strArrLen; i++) {
        if(!strArr[i]) continue;

        let sCnt = 1;

        for(let j = i + 1; j < strArrLen; j++) {
            
            if(strArr[i] === strArr[j]){
                strArr[j] = undefined;
                sCnt++;
            }

        }

        if(sCnt === 1) {
            idx = i;
            break;
        }


    }

    return idx;
};
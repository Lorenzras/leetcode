function isValid(s: string): boolean {
    const pairs = [
        "()",
        "[]",
        "{}",
    ]

    let checkStr = s;
    while (checkStr) {
        const origLength = checkStr.length;
        for (let c of pairs) {
            checkStr = checkStr.replace(c, "");

        }
    
        if (checkStr.length === origLength) {
            return false;
        }
    }


    return true;
};
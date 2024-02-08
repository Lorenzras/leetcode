function findEvenNumbers(digits: number[]): number[] {
    const set: number[] = [];
    for(let x = 0; x < digits.length; x++) {
        for(let y = 0; y < digits.length; y++) {
            if(x === y) continue;

            for(let z = 0; z < digits.length; z++) {
                if(y === z || x === z) continue;

                const n = Number(`${digits[x]}${digits[y]}${digits[z]}`);
                if(n >= 100 && n < 1000 && !(n % 2)) {
                    set.push(n)
                }
            }
        }
    }

    return Array.from(new Set(set)).sort();
};
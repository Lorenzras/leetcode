function plusOne(digits: number[]): number[] {
    const combined = BigInt(digits.join(''));
    console.log(combined);
    return String(combined + 1n).split('').map((d) => +d);
};
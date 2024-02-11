function plusOne(digits: number[]): number[] {
    const combined = BigInt(digits.join(''));
    return String(combined + 1n).split('').map((d) => +d);
};
function plusOne(digits: number[]): number[] {
   for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 >= 10) {
            digits[i] = (digits[i] + 1) % 10;
        } else {
            digits[i] = digits[i] + 1;
            return digits;
        }
    }
    return [1, ...digits];  
};
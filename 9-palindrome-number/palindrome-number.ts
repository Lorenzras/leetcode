function isPalindrome(x: number): boolean {
    const xstr = x.toString();
    return xstr.split('').reverse().join('') === xstr;
};
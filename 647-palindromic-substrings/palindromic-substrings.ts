const isPalindrome = (s: string) => {
    for(let i = 0; i < s.length; i++){

        if(s[i] !== s[s.length - i - 1]){
            return false;
        }
    } 

    return true;
}

function countSubstrings(s: string): number {
    
    let cb = s.length;

    for (let i = 0; i < s.length; i++) {
        for (let x = i + 2; x <= s.length; x++) {
            if(isPalindrome(s.substring(i, x))){
                cb++;
            }

        }
    }

    return cb;
};
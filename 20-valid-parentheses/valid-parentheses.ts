
function isValid(s: string): boolean {
    const openBrackets = '{[(';
    const pairs: Record<string, string> = {
        ')':'(',
        ']':'[',
        '}':'{',
    }
    let stack: string[] = [];

    for(let bracket of s){
        if(openBrackets.includes(bracket)){
            stack.push(bracket);
        }else {
            const stackPeek = stack[stack.length - 1];
            if(pairs[bracket] === stackPeek){
                stack.pop();
            } else return false;
        }
    }

    return stack.length === 0;
};
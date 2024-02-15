function climbStairs(n: number): number {
    let a = 0;
    let b = 1;

    while(n > 1) {
        const temp = a + b
        a=b
        b=temp
        n-=1
        console.log(a,b);
    }
           
    return a + b;
};
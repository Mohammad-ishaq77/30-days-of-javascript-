function factorial(n){
    if(n<=0){
        return 'please enter a positive integer';
    }
    let result = 1;
    for(let i=2;i<=n;i++){
        result *= i;
    }
    return result;
}
console.log(factorial(6));
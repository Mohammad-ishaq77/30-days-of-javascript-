function isPrime(num) {
    if (num <= 1 || !Number.isInteger(num)) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let num = 17; 
console.log(`${num} is ${isPrime(num) ? "a prime number" : "not a prime number"}.`);

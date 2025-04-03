function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function primes(max) {
    if (max === void 0) { max = 10; }
    var primes = [];
    var num = 2;
    while (primes.length < max && num < 1000) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}
console.log(primes(10));

function isPrime(n: number): boolean {
  if (n < 2) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;
      }
  }
  return true;
}


  const primes: number[] = [];
  let num = 2;
  while (primes.length < max) {
      if (isPrime(num)) {
          primes.push(num);
      }
      num++;
  }
  return primes;
}

const result = primes(10);
console.log(result);
console.log(`Number of primes: ${result.length}`);
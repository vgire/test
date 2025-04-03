export function isPrime(n: number): boolean {
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

export function primes(max: number = 10): number[] {
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

// Only run if this is the main module
if (import.meta.url === new URL(process.argv[1], 'file:').href) {
    console.log(primes(10));
}
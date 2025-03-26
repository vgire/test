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

function primes(max: number = 10): number[] {
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

// Tests
function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

// Test that primes(10) returns exactly 10 primes
const primesResult = primes(10);
assert(primesResult.length === 10, `Expected 10 primes, got ${primesResult.length}`);
assert(primesResult[9] === 29, `Expected last prime to be 29, got ${primesResult[9]}`);

console.log("All tests passed!");
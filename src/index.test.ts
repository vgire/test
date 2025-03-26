import { primes } from './index';

describe('primes function', () => {
  it('should return at most max results', () => {
    const result = primes(10);
    expect(result.length).toBe(10);
    expect(result[9]).toBe(29);
  });

  it('should return correct prime numbers', () => {
    const result = primes(10);
    const expectedPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    expect(result).toEqual(expectedPrimes);
  });
});
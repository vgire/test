import { primes } from './index';

describe('primes function', () => {
  it('should return at most the specified number of primes', () => {
    const result = primes(10);
    expect(result.length).toBe(10);
    expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  it('should handle default max value', () => {
    const result = primes();
    expect(result.length).toBe(10);
  });
});
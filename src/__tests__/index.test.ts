import { primes } from '../index';

describe('primes', () => {
  test('should return at most max results', () => {
    const result = primes(10);
    expect(result.length).toBe(10);
  });

  test('should return first 5 prime numbers', () => {
    const result = primes(5);
    expect(result).toEqual([2, 3, 5, 7, 11]);
  });
});
import { primes } from '../src/index';

describe('primes function', () => {
  it('should return at most max results', () => {
    const result10 = primes(10);
    expect(result10.length).toBe(10);
    expect(result10).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);

    const result5 = primes(5);
    expect(result5.length).toBe(5);
    expect(result5).toEqual([2, 3, 5, 7, 11]);
  });
});
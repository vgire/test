import { primes } from '../src/index';

describe('primes function', () => {
  it('should return at most max results', () => {
    const result10 = primes(10);
    expect(result10.length).toBe(10);

    const result5 = primes(5);
    expect(result5.length).toBe(5);

    const result0 = primes(0);
    expect(result0.length).toBe(0);
  });
});
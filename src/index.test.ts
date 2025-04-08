import { primes } from './index';

describe('primes', () => {
    it('should return at most max results', () => {
        expect(primes(10).length).toBe(10);
        expect(primes(5).length).toBe(5);
        expect(primes(0).length).toBe(0);
    });

    it('should return correct prime numbers', () => {
        expect(primes(5)).toEqual([2, 3, 5, 7, 11]);
        expect(primes(0)).toEqual([]);
    });
});
import { primes } from '../src/index';

describe('primes', () => {
    it('should return at most max results', () => {
        expect(primes(10).length).toBe(10);
        expect(primes(5).length).toBe(5);
        expect(primes(1).length).toBe(1);
    });

    it('should return correct prime numbers', () => {
        expect(primes(5)).toEqual([2, 3, 5, 7, 11]);
    });
});
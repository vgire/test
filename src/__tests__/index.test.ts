import { primes } from '../index';

describe('primes', () => {
    it('should return at most max results', () => {
        const result = primes(10);
        expect(result.length).toBe(10);
    });

    it('should return correct prime numbers', () => {
        const result = primes(5);
        expect(result).toEqual([2, 3, 5, 7, 11]);
    });

    it('should handle small inputs', () => {
        const result = primes(1);
        expect(result).toEqual([2]);
    });
});
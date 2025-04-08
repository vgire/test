import { primes } from './index';

describe('primes', () => {
    it('should return exactly the requested number of prime numbers', () => {
        const result = primes(10);
        expect(result).toHaveLength(10);
    });

    it('should return the first 10 prime numbers in order', () => {
        const result = primes(10);
        expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    it('should handle small numbers correctly', () => {
        expect(primes(1)).toEqual([2]);
        expect(primes(2)).toEqual([2, 3]);
        expect(primes(3)).toEqual([2, 3, 5]);
    });
});
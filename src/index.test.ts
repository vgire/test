import { primes } from './index';

describe('primes', () => {
    it('should return exactly max prime numbers', () => {
        const result = primes(10);
        expect(result).toHaveLength(10);
        expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    it('should return empty array for max = 0', () => {
        expect(primes(0)).toEqual([]);
    });

    it('should handle default parameter', () => {
        const result = primes();
        expect(result).toHaveLength(10);
    });
});
import { describe, it, expect } from 'vitest';
import { primes } from './index';

describe('primes', () => {
    it('should return exactly n prime numbers when called with n', () => {
        const result = primes(10);
        expect(result.length).toBe(10);
        expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    it('should return 10 primes by default', () => {
        const result = primes();
        expect(result.length).toBe(10);
    });

    it('should handle small numbers correctly', () => {
        expect(primes(1)).toEqual([2]);
        expect(primes(2)).toEqual([2, 3]);
        expect(primes(3)).toEqual([2, 3, 5]);
    });
});
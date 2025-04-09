import { primes } from './index';

describe('primes', () => {
    test('primes(10) should return exactly 10 prime numbers', () => {
        const result = primes(10);
        expect(result.length).toBe(10);
    });

    test('primes(10) should return the first 10 prime numbers in order', () => {
        const result = primes(10);
        const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
        expect(result).toEqual(expected);
    });

    test('primes() should return 10 prime numbers by default', () => {
        const result = primes();
        expect(result.length).toBe(10);
    });
});
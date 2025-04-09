import { expect } from 'chai';
import { primes } from './index';

describe('primes', () => {
    it('should return exactly max prime numbers', () => {
        const result = primes(10);
        expect(result).to.have.lengthOf(10);
        expect(result).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    it('should return empty array for max = 0', () => {
        expect(primes(0)).to.deep.equal([]);
    });

    it('should handle default parameter', () => {
        const result = primes();
        expect(result).to.have.lengthOf(10);
    });
});
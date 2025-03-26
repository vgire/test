import { primes } from '../dist/index.js';
import assert from 'node:assert';
import test from 'node:test';

test('primes should return at most max results', () => {
  const result = primes(10);
  assert.strictEqual(result.length, 10, `Expected 10 primes, but got ${result.length}`);
});

test('primes should return correct prime numbers', () => {
  const result = primes(10);
  const expectedPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  assert.deepStrictEqual(result, expectedPrimes);
});
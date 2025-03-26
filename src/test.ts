import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { primes } from './index.js';

test('primes function returns correct number of primes', (t) => {
  const result = primes(10);
  assert.strictEqual(result.length, 10, 'primes(10) should return exactly 10 primes');
});

test('primes function returns correct prime numbers', (t) => {
  const result = primes(10);
  const expectedPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  assert.deepStrictEqual(result, expectedPrimes, 'primes(10) should return the first 10 prime numbers');
});
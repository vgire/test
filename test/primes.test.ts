import { primes } from '../src/index.js';
import assert from 'assert';
import test from 'node:test';

test('primes function should return at most max results', (t) => {
  const result = primes(10);
  assert.strictEqual(result.length, 10, `Expected 10 primes, but got ${result.length}`);
});

test('primes function should return correct prime numbers', (t) => {
  const result = primes(10);
  const expectedPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  assert.deepStrictEqual(result, expectedPrimes);
});
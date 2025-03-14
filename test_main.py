import unittest
from main import primes, is_prime

class TestPrimes(unittest.TestCase):
    def test_primes_max_results(self):
        # Test that primes(max) returns at most max results
        result = primes(10)
        self.assertEqual(len(result), 10, "primes(10) should return exactly 10 results")

        result = primes(5)
        self.assertEqual(len(result), 5, "primes(5) should return exactly 5 results")

        result = primes(1)
        self.assertEqual(len(result), 1, "primes(1) should return exactly 1 result")

    def test_primes_correctness(self):
        # Test that the returned numbers are actually prime
        result = primes(5)
        self.assertEqual(result, [2, 3, 5, 7, 11], "First 5 prime numbers should be [2, 3, 5, 7, 11]")

if __name__ == '__main__':
    unittest.main()

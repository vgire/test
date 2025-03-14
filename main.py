import math

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

def primes(max=10):
    primes = []
    num = 2
    while len(primes) <= max - 1:  # This ensures we get exactly max results
        if is_prime(num):
            primes.append(num)
        num += 1
    return primes

print(primes(10))

// Implement memoization for an expensive function.
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = args.toString();
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}

// Example of an expensive function
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Memoized version of the expensive function
const memoizedFib = memoize(fib);

// Test the memoized function
console.log(memoizedFib(40)); // 102334155
console.log(memoizedFib(41)); // 165580141
console.log(memoizedFib(42)); // 267914296

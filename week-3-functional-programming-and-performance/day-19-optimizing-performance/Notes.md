# 📌 Goal:

Avoid recomputing results for the same inputs in an expensive function by caching them.

Memoization is a caching technique that improves performance by storing previously computed results.
This is especially useful in recursive functions like Fibonacci or other pure functions (same input → same output).

memoize() wraps a function and saves results in a cache object using the arguments as a key.

## 🔁 memoize(fn) – The Memoization Wrapper

```js
function memoize(fn) {
  const cache = {}; // Stores previously computed results
```

We create a cache object to store results of previous calls to fn.

```js
  return function (...args) {
    const key = args.toString();
```

- The returned function accepts any number of arguments using ...args (spread syntax).

- We convert args to a string key (like "5" or "10"). This lets us uniquely identify each input combination.

```js
if (key in cache) return cache[key];
```

- If this input was previously computed, return the cached result immediately — no extra work needed.

```js
    cache[key] = fn(...args);
    return cache[key];
  };
}
```

- If not cached, we compute and store the result before returning it.

## 🧠 fib(n) – The Expensive Recursive Function

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

- This function computes the nth Fibonacci number.

- It’s inefficient for large n because it recalculates the same values many times.

## ⚡ memoizedFib – Cached Version of Fibonacci

```js
const memoizedFib = memoize(fib);
```

- We pass fib into memoize() to get a version that remembers previous results.

- Now, if you call memoizedFib(40), it stores all the intermediate Fibonacci results from 1 to 40.

## 🧪 Testing & Results

```js
console.log(memoizedFib(40)); // Fast!
console.log(memoizedFib(41)); // Even faster since 40 was already done
```

- Without memoization, fib(40) would take thousands of recursive calls. With memoization, each value is only computed once.

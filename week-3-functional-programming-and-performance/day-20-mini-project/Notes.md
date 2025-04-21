# ✅ Debounce

Debounce delays the execution of a function until after a certain amount of time has passed without it being called again.

```js
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId); // cancel the previous scheduled execution
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args); // execute the function after `delay` ms
    }, delay);
  };
}
```

### How it works:

- Every time you call debouncedLog(), it resets the timer.

- The func only runs if no other calls were made for delay milliseconds.

- Useful for:

  - Resizing windows

  - Search inputs (trigger after user stops typing)

  - Scroll events (e.g., auto-save)

  # ✅ Throttle

  Throttle ensures that a function is only called at most once every limit milliseconds.

  ```js
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function (...args) {
      if (!lastRan) {
        func.apply(this, args); // run immediately the first time
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc); // clear any pending execution

        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args); // run after remaining time
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }
  ```

### How it works:

- The first call runs immediately.

- Future calls within the limit time are delayed but scheduled.

- Once enough time has passed (limit ms), the function is allowed to run again.

- Useful for:

  - Limiting scroll-triggered animations

  - Button spamming prevention

  - API polling

  ## 🔍 Example Usage:

  ```js
  const log = () => console.log('Function executed');
  const debouncedLog = debounce(log, 2000); // executes after 2s of inactivity
  const throttledLog = throttle(log, 2000); // executes at most once every 2s

  for (let i = 0; i < 10; i++) {
    debouncedLog(); // will only run once, 2s after last call
    throttledLog(); // will run immediately, then once every 2s
  }
  ```

## 🧠 TL;DR

| Concept  | Purpose                                  | Trigger Timing             |
| -------- | ---------------------------------------- | -------------------------- |
| Debounce | Wait for user to stop firing events      | After user stops actions   |
| Throttle | Limit how often a function can be called | At most once every "limit" |

// Build debounce and throttle functions from scratch.
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Example usage
const log = () => console.log('Function executed');
const debouncedLog = debounce(log, 2000);
const throttledLog = throttle(log, 2000);
// Simulating rapid calls
for (let i = 0; i < 10; i++) {
  debouncedLog();
  throttledLog();
}
// The debounced function will only execute once after 2 seconds of inactivity

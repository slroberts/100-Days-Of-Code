# 🔁 Debounce

### Definition:

Debouncing is a technique used to limit how often a function is called, especially in response to high-frequency events like scrolling, resizing, or typing.

It ensures that the function only runs after a pause, i.e., once the event stops firing for a specified amount of time.

```js
// fn: the function you want to debounce (e.g., an API call or an event handler).
// delay: how long to wait (in milliseconds) after the last event before running fn.
function debounce(fn, delay) {
  // This stores the ID of the setTimeout, so we can cancel it if a new call happens before the delay finishes.
  let timeoutId;

  // Returns a new function that wraps fn.
  // This is the function you'll actually use in your code (e.g., as an event listener).
  // args - collects all arguments passed in.
  return function (...args) {
    // Cancels the previous timer (if any).
    // So if the function is called repeatedly, the previous timer never gets to finish.
    clearTimeout(timeoutId);

    // Starts a new timer.
    // If the function isn’t called again during the delay, this will run fn.
    timeoutId = setTimeout(() => {
      // calls your original function fn.
      // .apply(this, args) ensures:
      // this is preserved correctly (important if you're using it in a class/component).
      // All arguments passed to the debounced function are forwarded to fn.
      fn.apply(this, args);
    }, delay);
  };
}
```

### Example Usage:

```js
window.addEventListener(
  'resize',
  debounce(() => {
    console.log('Resized!');
  }, 500)
);
```

## ⚙️ How It Works:

- Delay Execution: A function is delayed after the event fires.

- Reset on Repeated Events: If the event happens again within the delay, the timer resets.

- Execute After Silence: The function runs only after the delay passes without further events.

## 🛗 Analogy:

Like an elevator door waiting a few seconds after the last button press before closing—it resets the wait every time someone presses it again.

## 🧠 Key Concepts:

- Trailing Edge: Function runs after the delay (most common).

- Leading Edge: Function runs immediately on first trigger.

- setTimeout / clearTimeout: Used to manage the timer in JavaScript.

## 🚀 Why Use Debouncing?

- ✅ Reduces API calls (e.g., during typing)

- ✅ Improves performance

- ✅ Enhances user experience

## 🛠️ Common Use Cases:

- 🔍 Search Input: Delay auto-suggestions until user pauses.

- 🖱️ Button Clicks: Prevent multiple submissions.

- 🖼️ Resize Events: Avoid repeated layout recalculations.

- 📜 Scroll Events: Limit frequency of scroll-triggered logic.

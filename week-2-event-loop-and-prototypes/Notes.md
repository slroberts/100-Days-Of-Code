# 🧠 JavaScript: The Event Loop

## 🔹 JavaScript is Single-Threaded

- Only one thing can happen at a time.

- There's one call stack that executes code line-by-line.

- So how does it handle asynchronous code like setTimeout or fetch?

## 🔹 Key Components

1. Call Stack

   - Where JavaScript runs your functions.

   - Think of it as a stack of plates — functions are added (pushed) and removed (popped) as they’re called and completed.

2. Web APIs (Browser APIs)

   - Provided by the browser, not JavaScript itself.

   - When you call something like setTimeout(), the browser handles the timer outside the call stack.

   - Other examples: DOM events, AJAX requests, setInterval, etc.

3. Callback Queue (Task Queue)

   - Once the browser finishes the async task, it places the callback into this queue.

   - The callback waits here until the call stack is empty.

4. Event Loop

   - Constantly watches the call stack and the callback queue.

   - If the stack is empty, it moves the first callback from the queue into the stack.

   In short:
   📥 Web API handles async work →
   📤 Pushes callback into Callback Queue →
   🔁 Event Loop checks →
   ✅ Executes when Call Stack is clear

## 🔸 Example

```js
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');
```

### Output:

```sql
Start
End
Timeout
```

Even though the timeout is 0ms, it runs after "End" because:

1. setTimeout goes to the Web API.

2. Callback goes into the queue.

3. Event loop waits for the call stack to clear.

## 🔹 Microtasks vs Macrotasks (Advanced)

- Microtasks (like Promises) go into a separate microtask queue.

- They run before the callback queue after each tick of the event loop.

```js
console.log('A');

Promise.resolve().then(() => console.log('B'));

console.log('C');
```

### Output:

A

C

B

## 🧠 TL;DR:

- JavaScript has a single thread.

- The Event Loop allows non-blocking async behavior.

- Call Stack = where code runs.

- Web APIs = offload async tasks.

- Callback Queue = holds callbacks until the stack is free.

- Event Loop = traffic controller between the queue and the stack.

# 🎯 JavaScript Closures

In JavaScript, a closure is a function that remembers variables from its lexical scope, even after the outer function has finished executing.

---

## 🔹 What is a Closure?

Closures give you the power to preserve access to variables from a parent scope, creating more flexible and modular code.

```js
function outerFunction(outerVariable) {
return function innerFunction(innerVariable) {
console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
};
}

const newFunction = outerFunction("Hello");
newFunction("World"); // ➡️ Outer: Hello, Inner: World
🧠 In this example, newFunction still remembers outerVariable from outerFunction, even though that function has already executed.
```

## 💡 Why Closures Matter

### 🔐 Data Encapsulation

Closures allow you to keep variables "private" inside a function.

Useful for hiding implementation details and limiting access.

### 🔁 Function Factories

You can generate customized functions using closures.

E.g., createMultiplier(2) returns a function that doubles any number.

### 🔄 Maintaining State

Use closures to persist state across multiple calls without global variables.

## 🔧 Real-World Example: Counter with Closures

```js
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
```

📌 Here, the count variable is private—only accessible via the returned increment and decrement functions.

## ⚠️ Best Practices

- ✅ Use closures for data privacy and encapsulation.

- ✅ Avoid overusing closures where unnecessary—can lead to memory leaks if not managed well.

- ✅ Inspect closures in DevTools → Sources → Scope panel when debugging.

## ✅ Questions to Answer:

#### 1️⃣ What is a closure?

A closure is a function that has access to its outer scope, even after the outer function has returned.

#### 2️⃣ Why are closures useful?

They allow you to preserve state, hide private data, and create flexible, reusable functions.

#### 3️⃣ What’s a real-world use case for closures?

Creating a counter, implementing private variables, or building function factories (e.g., custom event handlers).

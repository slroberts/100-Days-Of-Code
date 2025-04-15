# 🧠 Higher-Order Functions (HOFs)

## 🔹 What is a Higher-Order Function?

A higher-order function is a function that either:

    - Takes one or more functions as arguments, or

    - Returns a function as its result

This concept enables functional programming patterns and allows for more reusable and abstract code.

## 🧠 Why Use Higher-Order Functions?

- Promotes code reuse and composition.

- Enables abstraction: you can define general behavior and customize it with functions passed as arguments.

- Makes operations on data (arrays, events, etc.) more expressive and concise.

## 🔧 Common Examples of HOFs

```js
✅ map()
```

Transforms each item in an array using a provided function.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2); // [2, 4, 6]
```

```js
✅ filter()
```

Returns a new array containing only items that match a condition.

```js
const evens = numbers.filter((n) => n % 2 === 0); // [2]
```

```js
✅ reduce()
```

Reduces an array to a single value by applying a function repeatedly.

```js
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 6
```

```js
✅ forEach()
```

Executes a function on each item (used for side effects).

```js
numbers.forEach((n) => console.log(n));
```

```js
✅ sort(), find(), every(), some()
```

All take functions as arguments to customize their behavior.

## 🏗️ Creating Your Own Higher-Order Functions

You can write functions that accept or return other functions:

```js
function greet(name) {
  return function (message) {
    console.log(`${message}, ${name}!`);
  };
}

const greetJohn = greet('John');
greetJohn('Hello'); // "Hello, John!"
```

Or a simple function wrapper:

```js
function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}
```

## 🧩 Functions as Values

In JavaScript, functions are first-class citizens:

    - Can be stored in variables.

    - Passed as arguments.

    - Returned from other functions.

    - Assigned to object properties or array elements.

## 🌀 Closures & HOFs

HOFs often rely on closures—functions that "remember" their lexical scope—to retain data or configuration between calls.

## 🧠 Bonus: Function Composition

Combine simple functions into more complex behavior:

```js
const add = (x) => x + 1;
const double = (x) => x * 2;

const compose = (f, g) => (x) => f(g(x));
const addThenDouble = compose(double, add);

console.log(addThenDouble(2)); // 6
```

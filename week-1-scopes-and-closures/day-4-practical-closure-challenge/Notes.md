# 🎯 Practical Closure Challenge

```js
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const multiplyByTwo = createMultiplier(2);
const multiplyByThree = createMultiplier(3);
const multiplyByFour = createMultiplier(4);

console.log(multiplyByTwo(5)); // 10
console.log(multiplyByThree(6)); // 18
console.log(multiplyByFour(7)); // 28
```

This code defines a **higher-order function** using closures to create reusable multiplier functions.

## 🔧 Function Definition:

```js
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
```

- ✅ createMultiplier takes a parameter factor.

- ✅ It returns a new function that takes number as an argument.

- ✅ This returned function multiplies number by factor.

## 🧠 Key Concept: Closure

The returned function “remembers” the value of factor from when createMultiplier was called.

This is called a closure — the inner function closes over factor.

## 🧪 Function Usage:

```js
const multiplyByTwo = createMultiplier(2);
const multiplyByThree = createMultiplier(3);
const multiplyByFour = createMultiplier(4);
```

- ✅ multiplyByTwo is now a function that multiplies any number by 2.

- ✅ Same for multiplyByThree and multiplyByFour with their respective factors.

## 📤 Output:

Each function works like this:

```js
multiplyByTwo(5) → 5 \* 2 → 10
multiplyByThree(6) → 6 \* 3 → 18
multiplyByFour(7) → 7 \* 4 → 28
```

## 🧠 Why it’s useful:

- Instead of rewriting the same multiplication logic, I created custom multiplier functions that encapsulate the logic using closures.

- It’s clean, reusable, and shows a key part of how JavaScript handles function factories and lexical scope.

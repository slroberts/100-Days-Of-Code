# 📌 JavaScript Scope

In JavaScript, **scope** determines where variables, functions, and objects can be accessed. Mastering scope makes your code more readable and predictable.

## 🔹 Types of Scope

1. **Global Scope 🌍**

   - Variables declared outside of any function are accessible everywhere.

2. **Function (Local) Scope 🔒**

   - Variables declared inside a function are only available within that function.

3. **Block Scope 🧱**
   - Variables declared with `let` or `const` inside `{}` (loops, conditionals) are only available within that block.

## 🔗 Scope Chain

Scope works like a **family tree**, where inner functions (Child) can access variables from their outer scopes (Parent).

## 🎒 Closures

Closures allow functions to **"remember"** variables from their creation scope, even after they’ve finished executing.

```js
function outer() {
  let outerVar = "I'm from outer";

  function inner() {
    let innerVar = "I'm from inner";
    console.log(outerVar); // ✅ Accessible
    console.log(innerVar); // ✅ Accessible
  }

  inner();
  console.log(innerVar); // ❌ Undefined (only exists inside inner)
}

outer();
console.log(outerVar); // ❌ Undefined (only exists inside outer)
```

# ⚠️ Best Practices

- ✅ Use let and const instead of var to avoid unexpected behavior.
- ✅ Limit global variables to prevent conflicts.
- ✅ Be mindful of closures—they can retain unused data and consume memory.

# ✅ Questions to Answer:

#### 1️⃣ Which variables are accessible inside inner()?

outerVar and innerVar are both accessible inside inner().

#### 2️⃣ What happens when trying to access innerVar from outer()?

innerVar is undefined because it’s scoped inside inner().

#### 3️⃣ Can outerVar be accessed globally?

❌ No, outerVar is only available within outer(), making it function-scoped.

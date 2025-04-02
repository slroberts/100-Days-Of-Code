### **Execution Context**

JavaScript execution context defines the **environment** in which code runs, determining available variables and functions. It consists of two phases:

1️⃣ **Creation Phase:**

- Creates the **global execution context** (window in browsers).
- Sets up the **scope chain**.
- Allocates memory for variables and functions (but doesn’t assign values yet).

2️⃣ **Execution Phase:**

- Executes code **line by line**.
- Assigns values to variables.
- Resolves function calls and manages scope.

---

### **Call Stack**

The **call stack** is a data structure that manages execution contexts.

- **LIFO (Last-In, First-Out)** principle: The last function added is the first to be removed.
- Every time a function is called, it is **pushed** onto the stack.
- Once a function completes, it is **popped** off the stack.

📝 **Example:**

```js
function first() {
  console.log('First function');
  second();
}
function second() {
  console.log('Second function');
}
first();
```

📌 **Call Stack Process:**  
1️⃣ `first()` is called → **Added to stack**  
2️⃣ `second()` is called inside `first()` → **Added to stack**  
3️⃣ `second()` completes → **Removed from stack**  
4️⃣ `first()` completes → **Removed from stack**

---

### **Hoisting**

Hoisting moves **variable and function declarations** to the top of their scope during the **creation phase**.

✅ **Hoisted:**

- Function declarations (`function myFunc() {}`)
- `var` variables (initialized as `undefined`)

🚫 **Not Hoisted:**

- `let` & `const` (they exist in a **"temporal dead zone"** until assigned)
- Function expressions & arrow functions (`const func = () => {}`)

📝 **Example:**

```js
console.log(a); // ❌ ReferenceError (let is not hoisted)
console.log(b); // ✅ undefined (var is hoisted but uninitialized)
console.log(myFunc()); // ✅ Works (function declarations are fully hoisted)

let a = 10;
var b = 20;

function myFunc() {
  return 'Hoisted Function!';
}
```

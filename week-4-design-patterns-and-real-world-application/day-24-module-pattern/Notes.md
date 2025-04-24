# Module Pattern

## ✅ Purpose

The Module Pattern is used to:

- Encapsulate private data and functions

- Expose a public API

- Avoid global scope pollution

- Promote code organization and separation of concerns

## 🧪 How It Works

Uses closures and an Immediately Invoked Function Expression (IIFE) to create a private scope:

```js
const myModule = (function () {
  // Private variables/functions
  let privateVar = 'secret';

  function privateFunc() {
    return `Accessed: ${privateVar}`;
  }

  // Public API
  return {
    publicMethod: function () {
      return privateFunc();
    },
  };
})();
```

🔒 privateVar and privateFunc are inaccessible from outside
🟢 Only publicMethod is exposed

## 🧱 Key Features

- Private Scope: Variables/functions not exposed remain private

- Public API: Only what's returned from the IIFE is accessible externally

- Singleton Behavior: Typically results in a single, shared instance

- Encapsulation: Simulates object-oriented encapsulation in JavaScript

## 🚀 Why Use It

- Helps keep code modular and clean

- Prevents name collisions in large codebases

- Maintains a controlled interface with private internals

- Ideal for older environments or vanilla JS projects

- Useful when ES6 import/export is not supported

## 🔁 Variant: Revealing Module Pattern

- Keeps private functions internal, but defines the public API explicitly at the end:

```js
const myModule = (function () {
  let privateVar = 'secret';

  function hidden() {
    return `Hidden: ${privateVar}`;
  }

  function exposed() {
    return hidden();
  }

  return {
    exposed,
  };
})();
```

## 📦 Common Use Cases

- Utility libraries

- Feature-specific services/components

- Script-heavy or legacy projects

- Temporary modular code without build tools

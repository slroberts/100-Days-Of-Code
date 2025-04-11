# ✅ Custom Promise Overview

This function mimics the behavior of the real Promise constructor, supporting:

- .then() for success

- .catch() for errors

- .finally() for cleanup after settle

## 🔍 Step-by-Step Explanation

Internal State Variables:

```js
let onResolved = null;
let onRejected = null;
let isFulfilled = false;
let isRejected = false;
let value;
let error;
```

- These track the state and data of the "promise."

- onResolved and onRejected are the callbacks from .then() and .catch().

- isFulfilled and isRejected prevent the promise from resolving/rejecting more than once.

## ✅ resolve() and reject() functions

```js
const resolve = (val) => { ... }
const reject = (err) => { ... }
```

- These are passed to the executor (the function you give when creating a promise).

- They:

  - Prevent double settlement

  - Save the result or error

  - Immediately call the corresponding callback if it's already been set.

## 🧪 executor(resolve, reject)

```js
executor(resolve, reject);
```

- This is where the "promise logic" runs (like a network request, timeout, etc.).

- Wrapped in try...catch to handle sync errors and forward them to reject.

## 📞 Returning an object with then, catch, finally

Instead of returning a real Promise instance, it returns an object that mimics it:

```js
return {
  then(callback) { ... },
  catch(callback) { ... },
  finally(callback) { ... }
}
```

🟢 .then(callback)

- Saves the success handler.

- If the promise is already fulfilled, it calls the handler using setTimeout(..., 0) to mimic async behavior.

🔴 .catch(callback)

- Same logic, but for rejection.

🔁 .finally(callback)

- Runs a callback once the promise is settled (fulfilled or rejected).

- Doesn't pass any arguments—just like real finally().

## 🧪 Test Run

```js
const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('Success!');
    } else {
      reject('Failure!');
    }
  }, 1000);
});
```

- Creates a promise that randomly resolves or rejects after 1 second.

```js
promise
  .then((result) => console.log('Resolved with:', result))
  .catch((error) => console.error('Rejected with:', error))
  .finally(() => console.log('Promise settled.'));
```

- Registering handlers for all three states.

- Because of setTimeout, the .then()/.catch() handlers are attached before the promise settles.

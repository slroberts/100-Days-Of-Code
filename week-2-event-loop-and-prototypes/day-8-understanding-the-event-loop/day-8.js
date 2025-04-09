// Predicting the output of a function with setTimeout and Promises.
console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

Promise.resolve().then(() => {
  console.log('Promise 2');
});

console.log('End');

// Explanation:
// console.log("Start") and console.log("End") run synchronously, so they happen immediately.

// setTimeout(..., 0) goes to the macrotask queue and is executed after the current call stack and all microtasks are done.

// Promise.then() callbacks are microtasks and are executed right after the main script finishes.

// Output:
// 1 - Start
// 2 - End
// 3 - Promise 1
// 4 - Promise 2
// 5 - setTimeout

// Example of Hoisting
console.log(a); // undefined
var a = 10;

hoisted(); // "I am hoisted!"
function hoisted() {
  console.log('I am hoisted!');
}

console.log(b); // ❌ ReferenceError
let b = 20;

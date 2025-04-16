// Implement a curried function that allows partial application.

// splitString is a higher-order function returns a new function that takes a string and splits it by that separator.
// This is currying — turning a two-argument function into a series of one-argument functions.
function splitString(separator) {
  return function (str) {
    return str.split(separator);
  };
}
// Partial application in action
const splitBySpace = splitString(' ');
const splitByComma = splitString(',');
console.log(splitBySpace('Hello World')); // ["Hello", "World"]
console.log(splitByComma('apple, banana, cherry')); // ["apple", "banana", "cherry"]

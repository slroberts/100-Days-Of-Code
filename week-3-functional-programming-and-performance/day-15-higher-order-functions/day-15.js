// Write your own map, filter, and reduce functions.

// Map function
function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

// Filter function
function myFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

// Reduce function
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  for (let i = initialValue !== undefined ? 0 : 1; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

// Test the functions
const numbers = [1, 2, 3, 4, 5];
const doubled = myMap(numbers, (num) => num * 2);
const evenNumbers = myFilter(numbers, (num) => num % 2 === 0);
const sum = myReduce(numbers, (acc, num) => acc + num, 0);
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10]
console.log('Even Numbers:', evenNumbers); // [2, 4]
console.log('Sum:', sum); // 15

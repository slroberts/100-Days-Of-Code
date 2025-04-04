// Create a function createMultiplier(factor) that returns a function that multiplies a number by factor.
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

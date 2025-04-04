// Counter function using closures
// The count variable is private and only accessible through the returned functions.
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();

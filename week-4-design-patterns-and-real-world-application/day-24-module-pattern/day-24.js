// Implement a simple module pattern to keep code organized.
const CounterModule = (function () {
  // Private variable
  let count = 0;

  // Private function
  function log(message) {
    console.log(`[Counter]: ${message}`);
  }

  // Public API
  return {
    increment: function () {
      count++;
      log(`Incremented to ${count}`);
      return count;
    },
    decrement: function () {
      count--;
      log(`Decremented to ${count}`);
      return count;
    },
    getCount: function () {
      log(`Current count is ${count}`);
      return count;
    },
  };
})();

CounterModule.increment(); // [Counter]: Incremented to 1
CounterModule.increment(); // [Counter]: Incremented to 2
CounterModule.getCount(); // [Counter]: Current count is 2
CounterModule.decrement(); // [Counter]: Decremented to 1

// Can't access count or log directly (they are private)
// console.log(CounterModule.count); // undefined


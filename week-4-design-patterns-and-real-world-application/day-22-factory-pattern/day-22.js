// Create a factory function that returns objects with different properties.
function createCar(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
    getDetails: function () {
      return `${this.year} ${this.make} ${this.model}`;
    },
  };
}

// Usage Example
const car1 = createCar('Toyota', 'Camry', 2020);
const car2 = createCar('Honda', 'Civic', 2021);
console.log(car1.getDetails()); // "2020 Toyota Camry"
console.log(car2.getDetails()); // "2021 Honda Civic"

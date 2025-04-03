// Nested Scope Prediction
function outer() {
  let outerVar = "I'm in the outer function";

  function inner() {
    let innerVar = "I'm inside the inner function";

    console.log(outerVar); // Accessible? -  Yes
    console.log(innerVar); // Accessible? - Yes
  }

  inner();
  console.log(innerVar); // Accessible? - No
}

outer();
console.log(outerVar); // Accessible? - No

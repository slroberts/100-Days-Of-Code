const addBtn = document.getElementById('add');
const clearBtn = document.getElementById('clear');
const container = document.getElementById('container');

// Memory leak example
// const counters = []; // This will grow endlessly

// addBtn.addEventListener('click', () => {
//   const el = document.createElement('div');
//   el.textContent = 'Click count: 0';
//   let count = 0;

//   // 🚨 This closure creates a memory leak
//   const onClick = () => {
//     count++;
//     el.textContent = `Click count: ${count}`;
//   };

//   el.addEventListener('click', onClick);
//   container.appendChild(el);

//   // 🚨 We keep the reference, so it never gets garbage collected
//   counters.push({ el, onClick });
// });

// clearBtn.addEventListener('click', () => {
//   container.innerHTML = '';
//   // ❌ We should clean up listeners, but we don't
// });

// Cleaned up memory management example avoiding memory leaks
const counters = [];

addBtn.addEventListener('click', () => {
  const el = document.createElement('div');
  el.textContent = 'Click count: 0';
  let count = 0;

  const onClick = () => {
    count++;
    el.textContent = `Click count: ${count}`;
  };

  el.addEventListener('click', onClick);
  container.appendChild(el);

  // ✅ Store references so we can clean them up later
  counters.push({ el, onClick });
});

clearBtn.addEventListener('click', () => {
  // ✅ Clean up each counter
  counters.forEach(({ el, onClick }) => {
    el.removeEventListener('click', onClick); // ✅ Remove listener
    container.removeChild(el); // ✅ Remove from DOM
  });

  counters.length = 0; // ✅ Clear references
});

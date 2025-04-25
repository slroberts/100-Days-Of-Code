// Strategy implementations
const apiStrategies = {
  get: async () => {
    return await fetch('https://jsonplaceholder.typicode.com/posts/1').then(
      (res) => res.json()
    );
  },
  post: async () => {
    return await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
    }).then((res) => res.json());
  },
  put: async () => {
    return await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1,
        title: 'updated',
        body: 'bar',
        userId: 1,
      }),
    }).then((res) => res.json());
  },
  delete: async () => {
    return await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    }).then((res) => ({ status: res.status, message: 'Deleted' }));
  },
};

// Strategy context
const apiContext = {
  setStrategy(type) {
    this.strategy = apiStrategies[type];
  },
  async execute() {
    if (!this.strategy) throw new Error('Strategy not set');
    return await this.strategy();
  },
};

// UI handling
document.getElementById('sendBtn').addEventListener('click', async () => {
  const type = document.getElementById('requestType').value;
  apiContext.setStrategy(type);
  const output = document.getElementById('output');

  try {
    const data = await apiContext.execute();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = `Error: ${err.message}`;
  }
});

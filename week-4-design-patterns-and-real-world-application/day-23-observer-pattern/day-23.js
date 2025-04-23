class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = new Set();
    }
    this.events[event].add(listener);
  }

  off(event, listener) {
    if (this.events[event]) {
      this.events[event].delete(listener);
    }
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(data));
    }
  }
}

// Instantiate chat event bus
const chatBus = new EventEmitter();

// === Listeners ===
chatBus.on('message', (msg) => {
  console.log(`[ChatLog] ${msg.user}: ${msg.text}`);
});

chatBus.on('message', (msg) => {
  console.log(`[Notification] 🔔 New message from ${msg.user}`);
});

chatBus.on('typing', (user) => {
  console.log(`[Typing] ${user} is typing...`);
});

// === Chat Interaction with Timing ===
function simulateTypingAndMessage(user, message, delay = 1000) {
  chatBus.emit('typing', user);
  setTimeout(() => {
    chatBus.emit('message', { user, text: message });
  }, delay);
}

// === Simulated Chat Flow ===
simulateTypingAndMessage('Alice', 'Hey! Just checking in...', 2000);
setTimeout(
  () =>
    simulateTypingAndMessage('Bob', 'Hey Alice! Good to see you here 👋', 2500),
  3000
);
setTimeout(
  () => simulateTypingAndMessage('Charlie', 'Hey all, what’s up?', 1500),
  7000
);

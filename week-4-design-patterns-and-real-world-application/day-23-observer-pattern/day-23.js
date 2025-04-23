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

  once(event, listener) {
    const wrapper = (data) => {
      listener(data);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}

// Instantiate chat event bus
const chatBus = new EventEmitter();

// === Listeners ===

// Regular listeners
const logMessage = (msg) => {
  console.log(`[ChatLog] ${msg.user}: ${msg.text}`);
};
const showNotification = (msg) => {
  console.log(`[Notification] 🔔 New message from ${msg.user}`);
};

chatBus.on('message', logMessage);
chatBus.on('message', showNotification);

// Once: only show welcome on the first message
chatBus.once('message', () => {
  console.log(`[System] Welcome! You're now live in the chat.`);
});

// Typing listener (will be removed after first trigger)
const typingIndicator = (user) => {
  console.log(`[Typing] ${user} is typing...`);
};
chatBus.on('typing', typingIndicator);

// Unsubscribe from typing after the first typing event
chatBus.once('typing', () => {
  chatBus.off('typing', typingIndicator);
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

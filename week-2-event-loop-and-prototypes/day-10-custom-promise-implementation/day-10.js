// Custom Promise Implementation
function CustomPromise(executor) {
  let onResolved = null;
  let onRejected = null;
  let isFulfilled = false;
  let isRejected = false;
  let value;
  let error;

  const resolve = (val) => {
    if (isFulfilled || isRejected) return;
    isFulfilled = true;
    value = val;
    if (onResolved) {
      onResolved(value);
    }
  };

  const reject = (err) => {
    if (isFulfilled || isRejected) return;
    isRejected = true;
    error = err;
    if (onRejected) {
      onRejected(error);
    }
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }

  return {
    then(callback) {
      onResolved = callback;
      if (isFulfilled) {
        setTimeout(() => onResolved(value), 0);
      }
      return this;
    },
    catch(callback) {
      onRejected = callback;
      if (isRejected) {
        setTimeout(() => onRejected(error), 0);
      }
      return this;
    },
    finally(callback) {
      if (isFulfilled || isRejected) {
        setTimeout(callback, 0);
      }
      return this;
    },
  };
}

const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('Success!');
    } else {
      reject('Failure!');
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log('Resolved with:', result);
  })
  .catch((error) => {
    console.error('Rejected with:', error);
  })
  .finally(() => {
    console.log('Promise settled.');
  });

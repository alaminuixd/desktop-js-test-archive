class MyPromise {
  constructor(executor) {
    this.state = "pending"; // Can be "pending", "fulfilled", or "rejected"
    this.value = undefined;
    this.handlers = [];

    const resolve = (value) => {
      if (this.state !== "pending") return;
      this.state = "fulfilled";
      this.value = value;
      this.handlers.forEach((handler) => handler(value));
    };

    const reject = (error) => {
      if (this.state !== "pending") return;
      this.state = "rejected";
      this.value = error;
      this.handlers.forEach((handler) => handler(error));
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled) {
    return new MyPromise((resolve) => {
      if (this.state === "fulfilled") {
        resolve(onFulfilled(this.value));
      } else {
        this.handlers.push(() => resolve(onFulfilled(this.value)));
      }
    });
  }
}

// Example Usage:
const p = new MyPromise((resolve) => {
  setTimeout(() => resolve("Hello"), 1000);
});

p.then((value) => {
  console.log(value); // Logs "Hello" after 1 second
});

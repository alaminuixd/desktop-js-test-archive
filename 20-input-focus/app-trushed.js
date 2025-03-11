const theForm = document.querySelector("form");
const input = document.querySelector("form > input");
/* console.log(theForm);
console.dir(theForm);

console.dir(input); */
// Get all properties and filter out only the methods
/* const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(input)).filter(
  (prop) => typeof input[prop] === "function"
);

console.log(methods); */

// Get all properties from the input's prototype chain
let methods = [];
let proto = Object.getPrototypeOf(input);

// Traverse the prototype chain
while (proto) {
  methods = methods.concat(
    Object.getOwnPropertyNames(proto).filter(
      (prop) => typeof input[prop] === "function"
    )
  );
  proto = Object.getPrototypeOf(proto);
}

console.log(Object.getPrototypeOf(input));

// mouse press
let mouseDownTime;
let holdThreshold = 1000; // 1 second hold threshold

const element = document.querySelector("body");

element.addEventListener("mousedown", () => {
  mouseDownTime = Date.now(); // Record the time when the mouse button is pressed
});

element.addEventListener("mouseup", () => {
  const mouseUpTime = Date.now();
  const holdDuration = mouseUpTime - mouseDownTime;

  if (holdDuration >= holdThreshold) {
    console.log("Mouse held down for " + holdDuration + " milliseconds.");
  } else {
    console.log("Mouse clicked.");
  }
});

let num = 0;
let isHolding = false; // Flag to check if the mouse is being held down

const element = document.querySelector("body"); // Assuming you're using a button

element.addEventListener("mousedown", () => {
  isHolding = true;
  num += 1; // Increment num when mouse is pressed
  console.log(num); // Print the updated num value

  // Continuously increment num while the mouse is held down
  const interval = setInterval(() => {
    if (isHolding) {
      num += 1;
      console.log(num); // Print updated num every 100ms (or any interval you choose)
    }
  }, 10);

  // Stop the interval when mouse is released
  element.addEventListener("mouseup", () => {
    isHolding = false;
    clearInterval(interval); // Stop the interval
  });
});

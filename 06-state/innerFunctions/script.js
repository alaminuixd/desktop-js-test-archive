/* let message, btn;
message = document.getElementById("message");
btn = document.getElementById("btn");
function greet(cb, gt) {
  return (fn, ln) => {
    let messageText = gt;
    message.innerText = messageText;
    if (cb) {
      messageText = gt + " " + cb(`${fn} ${ln} !`);
    } else {
      gt;
    }
    return messageText;
  };
}
function cbF(val1, val2) {
  return val1 + " " + val2;
}
greet(cbF, "Welcome")("", "");
btn.addEventListener("click", () => {
  message.innerText = greet(cbF, "Welcome")("Al Amin", "khan");
}); */

let message, btn;
message = document.getElementById("message");
btn = document.getElementById("btn");

function greet(cb, gt) {
  // Display initial message
  message.innerText = gt;

  return (fn, ln) => {
    let messageText = gt; // Set initial message text
    if (cb) {
      // If callback function is provided, call it with fn and ln parameters
      messageText += " " + cb(fn, ln); // Append the result of the callback function to messageText
    }
    message.innerText = messageText; // Update the message element
    return messageText;
  };
}

function cbF(val1, val2) {
  return val1 + " " + val2;
}

// Call greet function initially without the callback
greet(null, "Welcome")("", "");

btn.addEventListener("click", () => {
  // Call greet function with callback and update the message element with first name and last name
  greet(cbF, "Welcome")("Al Amin", "Khan");
});

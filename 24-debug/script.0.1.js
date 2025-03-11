function printName(firstName, lastName) {
  console.log(`My name is ${firstName} ${lastName}`);
  return `My name is ${frstName} ${lastName}`;
}

function printNTimes(n, value) {
  if (n > 30) {
    console.log("It's Big");
  }
  for (let i = 0; i < n; i++) {
    console.log(value);
  }
}

document.addEventListener("click", (e) => {
  console.log("clicked");
  document.body.append("Hello");
});

/* debugger; */
setTimeout(() => {
  console.log("hello");
}, 1000);
printNTimes(5, "Hello"); // Why this function is called anonymouse in Chrome debugger

function main() {
  printName("Al Amin", "Khan");
  test();
}

function test() {
  printNTimes(2, "Bye");
}

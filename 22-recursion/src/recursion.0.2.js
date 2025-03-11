function countdownPos(n) {
  if (n > 10) return; // Base case
  console.log(n); // Do something
  countdownPos(n + 1); // Recursive call is the last action
}
countdownPos(0);

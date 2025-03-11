const elm = document.querySelector("body");
let count = 0;
let isHolding = false;
let mouseDownTimer;

elm.addEventListener("mousedown", () => {
  isHolding = true;
  mouseDownTimer = setInterval(() => {
    if (isHolding) {
      count += 1;
      console.log(count);
    }
  }, 100);
});
elm.addEventListener("mouseup", () => {
  isHolding = false;
  clearInterval(mouseDownTimer);
});

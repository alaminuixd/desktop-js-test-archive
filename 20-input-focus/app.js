const form = document.querySelector("form");
const inputs = document.querySelectorAll("form input");
Array.from(form.children).forEach((item, i) => {
  item.addEventListener("keyup", (e) => {
    console.log(e.target.value);
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
});

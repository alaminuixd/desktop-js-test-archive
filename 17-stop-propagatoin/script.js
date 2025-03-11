const btnClick = document.getElementById("clickMe");
document.body.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Hello!");
});

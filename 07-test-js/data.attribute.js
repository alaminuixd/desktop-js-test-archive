const creatures = document.querySelectorAll(".creatures > li");
/* function showDetails(event) {
  const creature = event.currentTarget; // Get the clicked item
  const dataType = creature.getAttribute("data-creature-type");
  console.log(dataType); // Log the type
} */

/* Array.from(creatures).forEach((item) => {
  item.addEventListener("click", (e) => {
    const dataType = e.target.getAttribute("data-creature-type");
    console.log(`The ${e.target.innerText} is a type of ${dataType}.`);
  });
}); */

function showDetails(event) {
  const theData = event.currentTarget.getAttribute("data-creature-type");
  const animal = event.currentTarget.innerText;
  console.log(`The ${animal} type is ${theData}`);
}

Array.from(creatures).forEach((item) => {
  item.addEventListener("click", showDetails);
});

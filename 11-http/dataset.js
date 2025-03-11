const lists = document.querySelectorAll("ul.lists > li");
const answer = document.querySelector(".result");
function describeCollection(e) {
  const collectionType = e.target.dataset.species;
  const collectionName = e.target.textContent;
  let article;
  collectionName.toLowerCase().split("")[0] === "a"
    ? (article = "An")
    : (article = "A");
  const result = `${article} ${collectionName} is a type of ${collectionType}`;
  console.log(result);
  answer.textContent = result;
}
lists.forEach((list) => {
  list.addEventListener("click", describeCollection);
});

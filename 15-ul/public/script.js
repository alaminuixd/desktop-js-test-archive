const todos = document.querySelector("ul.todos");

/* function generateTemplate(todo, parent) {
  const html = `
      <li class="list-group-item d-flex justify-content-between align-item-center">
          <span>${todo}</span>
          <span><img class="delete" src="./images/recycle.png" alt="recycle"></span>
      </li>
      `;
  parent.insertAdjacentHTML("beforeend", html);
}

generateTemplate("List content 1", todos); */

/* Array.from(todos.children)
  .filter((item) => item.textContent.toLowerCase().trim().includes("hello")) // return boolean
  .forEach((item) => item.classList.add("blue")); */

const hello = Array.from(todos.children).filter((item) =>
  item.textContent.toLowerCase().trim().includes("hello")
); // return boolean
hello.forEach((item) => (item.className = "blue")); // classname property replace all class with new one
// hello.forEach((item) => item.classList.add("blue")); // this just append the new class to olds

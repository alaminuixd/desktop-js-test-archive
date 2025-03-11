const container = document.querySelector(".container");
// create node elements dynamically
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

// add class to dynamiclly generated HTML node elements
header.className = "header";
main.className = "main";
footer.className = "footer";

// append all node elements into "container"
container.append(...[header, main, footer]);

// add HTML node elements using insertAdjacentHTML method
container.insertAdjacentHTML(
  "beforebegin",
  `
  <div class="project-title">
  <h1>Learn insertAdjacentHTML method</h1>
  </div>
  `
);
container.insertAdjacentHTML(
  "afterbegin",
  `
  <main>
  <h2>insertAdjacentHTML method is a great way to insert HTML into DOM node elements</h2>
  <article>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
    provident placeat ullam dicta laboriosam, laborum in aliquam omnis ex,
    repellendus ut cumque nemo molestiae quia ea ratione vel assumenda
    quisquam.</p>
  </article>
  </main>  
  `
);
container.insertAdjacentHTML(
  "beforeend",
  `
    <p>I forgot to add this text and now add it using "beforeend" position in "insertAdjacentHTML" method</p>
    `
);
container.insertAdjacentHTML(
  "afterend",
  `
  <div class="footer">
  <p>This is the footer area added using "insertAdjacentHTML" method and it's positon "afterend"</p>
  </div>
  `
);

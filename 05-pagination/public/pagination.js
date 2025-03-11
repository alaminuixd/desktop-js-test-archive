const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Sample data
const itemsPerPage = 3; // Number of items per page
let currentPage = 1; // Current page number

// Function to render the items for the current page
function renderItems() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = items.slice(start, end);

  const container = document.getElementById("items-container");
  container.innerHTML = ""; // Clear previous items

  pageItems.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = `Item ${item}`;
    container.appendChild(div);
  });

  // Disable buttons if on the first or last page
  document.getElementById("prev-btn").disabled = currentPage === 1;
  document.getElementById("next-btn").disabled = end >= items.length;
}

// Event listener for "Previous" button
document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderItems();
  }
});

// Event listener for "Next" button
document.getElementById("next-btn").addEventListener("click", () => {
  if (currentPage * itemsPerPage < items.length) {
    currentPage++;
    renderItems();
  }
});

// Initial render
renderItems();

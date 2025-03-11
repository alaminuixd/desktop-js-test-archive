const toggleButton = document.getElementById("toggleButton");
const content = document.getElementById("content");

let isOpen = false;

toggleButton.addEventListener("click", () => {
  if (isOpen) {
    // Collapse
    content.style.maxHeight = content.scrollHeight + "px"; // Set to current height to trigger transition
    setTimeout(() => {
      content.style.maxHeight = "0px"; // Collapse to 0 after registering current height
    }, 0);
    toggleButton.textContent = "Expand";
  } else {
    // Expand
    content.style.maxHeight = content.scrollHeight + "px"; // Expand to full height
    toggleButton.textContent = "Collapse";
  }
  isOpen = !isOpen; // Toggle the open state
});

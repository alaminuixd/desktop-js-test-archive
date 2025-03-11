const data_URI = "https://jsonplaceholder.typicode.com/comments?postId=1";
function getData() {
  const url = new URL(data_URI);
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Invalid data URL");
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.warn(err.message));
}
getData();

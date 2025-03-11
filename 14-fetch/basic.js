const data_URI = "https://jsonplaceholder.typicode.com/users";
/* fetch(data_URI)
  .then((res) => {
    if (!res.ok) {
      throw new Error("The data URL is not valid");
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.warn(err.message));
 */

// using async
async function getData() {
  try {
    let response = await fetch(data_URI);
    console.log(response);
    if (!response.ok) throw new Error("The data URL is not valid.");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
getData();

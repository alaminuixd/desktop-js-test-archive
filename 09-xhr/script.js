// The following code shows how we can catch async data from outside.
const datalist = document.getElementById("datalist");
function getRequest(url) {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.response);
          res(response);
        } else {
          rej(xhr.status);
        }
      }
    };
    xhr.send();
  });
}

async function getData() {
  try {
    const result = await getRequest(
      "https://jsonplaceholder.typicode.com/users"
    );
    //console.log(result);
    return result;
  } catch (error) {
    //console.log(error);
    return null;
  }
}
// "obj" is a promise
let obj = getData();
obj
  .then((dataArray) => {
    // "dataArray" is an "Array" with "objects" inside it
    dataArray.forEach((data) => {
      const list = document.createElement("li");
      datalist.append(list);
      const { id, name, username, email } = data;
      list.innerHTML = `
      <p>${id}</p>
      <p>Name: ${name}</p>
      <p>User Name: ${username}</p>
      <p>Email: ${email}</p>
      `;
      console.log(`${id} ${name} ${username} ${email}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

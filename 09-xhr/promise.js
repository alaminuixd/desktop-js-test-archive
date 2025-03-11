function getRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        } else {
          reject(xhr.status);
        }
      }
    };
    xhr.send();
  });
}

async function fetchData() {
  try {
    const result = await getRequest(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(result);
    return result; // Storing the result
  } catch (error) {
    console.error(`Error: ${error}`);
    return null; // Returning null in case of error
  }
}

const result = fetchData();

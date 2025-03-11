window.onload = () => {
  const myForm = document.getElementById("testForm");
  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formDataArray = Array.from(formData); // Convert FormData to an array of [key, value] pairs

    console.log(formDataArray); // true, because it’s an array now

    // Log form data
    const valueObject = formDataArray.reduce((newObj, [key, val]) => {
      console.log(`Key: ${key} || val: ${val} `);
      newObj[key] = val;
      return newObj;
    }, {});

    console.log(valueObject);
  });
};

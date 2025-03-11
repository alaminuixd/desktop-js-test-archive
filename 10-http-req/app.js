const express = require("express");
const axios = require("axios");

// create app object from express factory function
const app = express();
app.set("view engine", "ejs");
const PORT = 3001;
app.listen(PORT, () => console.log(`Listening to the port ${PORT}`));

app.get("/", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      console.log(response.data); // Log the data to the console
      //res.json(response.data); // Send the JSON data as a response
      res.render("index", { data: response.data });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred while fetching the data.");
    });
});

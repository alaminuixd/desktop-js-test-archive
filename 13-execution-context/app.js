const fs = require("fs");
const express = require("express");
const app = express();

// set view engine as ejs
app.set("view engine", "ejs");
// middle for static files
app.use(express.static("public"));

let txtinData;
fs.readFile("./docs/textOut.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    txtinData = data;
  }
});

// home page route
app.get("/", (req, res) => {
  res.render("index", { title: "Home page", content: txtinData });
});

// create express server
const PORT = 3001;
app.listen(PORT, () => console.log(`Listening to the port ${PORT}`));

const express = require("express");
const app = express();

// Serve static files (CSS, JS, images)
app.use(express.static("public"));

// Serve the index.html file
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(3000, () => console.log("Connected to port 3000"));

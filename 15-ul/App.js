const express = require("express");
const app = express();
// middlewares
app.use(express.static("public"));
// Server
const PORT = 3020;
app.listen(PORT, () => console.log(`listening to the port ${PORT}`));
// routes
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/views" });
});

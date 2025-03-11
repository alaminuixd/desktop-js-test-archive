import express from "express";
import setupUserController from "./users.js";

// setup express
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

setupUserController(app);

app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});

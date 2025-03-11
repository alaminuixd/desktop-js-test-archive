const fs = require("fs");

if (!fs.existsSync("./doc")) {
  fs.mkdir("./doc", (err) => (err ? console.log(err) : console.log("created")));
}

if (!fs.existsSync("./doc/one.txt")) {
  fs.writeFile("./doc/one.txt", "data", () => {
    console.log("file created");
  });
} else {
  fs.unlink("./doc/one.txt", (err) =>
    err ? console.log(err) : console.log("unlinked")
  );
}

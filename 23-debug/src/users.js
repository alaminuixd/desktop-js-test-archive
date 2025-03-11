const users = [
  {
    id: 1,
    name: "Dave Gray",
    dateOfBirth: "02/28/1985",
  },
  {
    id: 2,
    name: "Randyn Netwell",
    dateOfBirth: "12/01/2002",
  },
  {
    id: 3,
    name: "Meglin Dymisco",
    dateOfBirth: "12/03/1989",
  },
];

function setupUserController(app) {
  app.get("/users", (req, res) => {
    res.send(users);
  });
  app.get("/users/:id", (req, res) => {
    const user = users.find((u) => u.id === req.params.id);
    if (!user) return res.sendStatus(404);
    return res.send(user);
  });
}

export default setupUserController;

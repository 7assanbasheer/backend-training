const express = require("express");

const app = express();

app.use(express.json());

const users = [];

app.get("/", (req, res) => {
  res.send({
    msg: "ارحب",
  });
});

app.get("/hello", (req, res) => {
  res.send({
    msg: "h",
  });
});

app.get("/person/:name", (req, res) => {
  const name = req.params.name;
  res.send({
    name,
  });
});

app.post("/signup", (req, res) => {
  const username = req.body.username;

  const email = req.body.email;
  const password = req.body.password;

  if (users.filter((user) => user.username === username).length > 0)
    return res.status(400).send({ message: "user already exist" });

  users.push({ username, email, password });

  res.send({ message: "created" });
});

app.listen(3000);

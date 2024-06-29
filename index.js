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
  console.log({
    username,
    email,
    password,
  });

  res.send();
});

app.listen(3000);

import express from "express";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const app = express();

app.use(express.json());

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

app.post("/signup", async (req, res) => {
  const username = req.body.username;

  const email = req.body.email;
  const password = req.body.password;

  //  if (users.filter((user) => user.username === username).length > 0)
  //   return res.status(400).send({ message: "user already exist" });

  await addDoc(collection(db, "users"), {
    username,
    password,
    email,
  });

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

  res.send({ message: "created" });
});

app.listen(3000);

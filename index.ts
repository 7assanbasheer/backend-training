import express from "express";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
import cors from "cors";

import { db } from "./firebase";

const app = express();

app.use(cors());
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
  console.log(req.body);

  const username = req.body.username;

  const email = req.body.email;
  const password = req.body.password;

  const q = query(collection(db, "users"), where("username", "==", username));
  const userExist = await getDocs(q);

  if (!userExist.empty) {
    return res.status(400).send({ message: "user already exist" });
  }

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

app.listen(8000);

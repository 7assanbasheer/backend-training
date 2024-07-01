import express from "express";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
import cors from "cors";

import { db } from "./firebase";
import { signup } from "./signup";
import { addProduct } from "./tesrmarketing";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send({ msg: "ارحب" }));

app.get("/offers", (req, res) => {
  res.send({
    msg: "عروض السنة",
  });
});

app.get("/person/:name", (req, res) => res.send({ name: req.params.name }));

app.post("/signup", signup);

app.post("/addproduct", addProduct);

app.listen(8000);

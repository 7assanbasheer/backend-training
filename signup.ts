import { Request, Response } from "express";
import { query, collection, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function signup(req: Request, res: Response) {
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
}

import { Request, Response } from "express";
import { query, collection, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

type Product = {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

export async function addProduct(req: Request, res: Response) {
  // const name = req.body.name
  // const pticr = req.body.price
  // const imageUrl = req.body.imageUrl
  // const quantity = req.body.quantity

  const { name, price, imageUrl, quantity } = req.body as Product;

  await addDoc(collection(db, "products"), { name, price, imageUrl, quantity });
}

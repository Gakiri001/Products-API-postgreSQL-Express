import {Router} from "express"
import pool from "../db.config.js";

const router = Router();

router.get("/",(req,res) => {
  res.send("Get all the products")
})

router.get("/:id",(req,res) => {
  res.send("Gets a single product")
})

router.post("/",(req,res) => {
  res.send("Adds/Creates a new product to the database")
})

router.patch("/:id",(req,res) => {
  res.send("Updates a products")
})

router.delete("/:id",(req,res) => {
  res.send("Deletes a product from the database")
})

export default router
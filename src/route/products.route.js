import {Router} from "express"
// import pool from "../db.config.js";
import { getALLProducts } from "../controllers/products.controllers.js"; 

const router = Router();

router.get("/", getALLProducts )

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
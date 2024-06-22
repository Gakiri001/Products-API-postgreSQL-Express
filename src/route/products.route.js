import { Router } from "express";
// import pool from "../db.config.js";
import {
  getALLProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controllers.js";

import { validateProduct } from "../middleware/products.middleware.js";

const router = Router();

router
  .get("/", getALLProducts)
  .get("/:id", getSingleProduct)
  .post("/", validateProduct, createProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default router;

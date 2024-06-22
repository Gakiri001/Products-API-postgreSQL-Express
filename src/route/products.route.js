import {Router} from "express"
// import pool from "../db.config.js";
import { getALLProducts,getSingleProduct,createProduct,updateProduct,deleteProduct } from "../controllers/products.controllers.js";

import { validateProduct } from "../middleware/products.middleware.js";

const router = Router();

router.get("/", getALLProducts )

router.get("/:id",getSingleProduct)

router.post("/",validateProduct,createProduct)

router.patch("/:id",updateProduct)

router.delete("/:id",deleteProduct)

export default router
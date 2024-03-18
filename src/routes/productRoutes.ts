import express from "express";
import { getAllProducts, addProduct } from "../controllers/productsController";
const router = express.Router();

router.route("/").get(getAllProducts).post(addProduct);

export default router;

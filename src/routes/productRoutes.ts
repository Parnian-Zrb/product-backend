import express from "express";
import {
  getAllProducts,
  addProduct,
  getProduct,
} from "../controllers/productsController";
const router = express.Router();

router.route("/").get(getAllProducts).post(addProduct);
router.route("/:id").get(getProduct);
export default router;

import express from "express";
import {
  getAllProducts,
  addProduct,
  getProduct,
  deleteProduct,
} from "../controllers/productsController";
const router = express.Router();

router.route("/").get(getAllProducts).post(addProduct);
router.route("/:id").get(getProduct).delete(deleteProduct);

export default router;

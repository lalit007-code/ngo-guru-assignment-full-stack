import { Router } from "express";

import { authorizeRoles, verifyJWT } from "../middleware/authMiddleware.js";
import {
  deleteProduct,
  productList,
  updateProduct,
} from "../contorllers/productController.js";

const router = Router();

router.route("/").get(productList);
router
  .route("/:productId", verifyJWT, authorizeRoles("admin"))
  .patch(updateProduct)
  .delete(deleteProduct);
export default router;

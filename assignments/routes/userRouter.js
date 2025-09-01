import { Router } from "express";

import { verifyJWT } from "../middleware/authMiddleware.js";
import { login, register } from "../contorllers/userController.js";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
export default router;

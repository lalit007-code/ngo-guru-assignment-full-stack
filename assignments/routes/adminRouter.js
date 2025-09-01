import { Router } from "express";

import { authorizeRoles, verifyJWT } from "../middleware/authMiddleware.js";
import { adminData } from "../contorllers/adminController.js";
import { getAllUsers, updateUserRole } from "../contorllers/userManagementController.js";

const router = Router();

// Protected: only admins
router.post("/adminData", verifyJWT, authorizeRoles("admin"), adminData);
router.get("/users", verifyJWT, authorizeRoles("admin"), getAllUsers);
router.patch("/users/:userId", verifyJWT, authorizeRoles("admin"), updateUserRole);

export default router;

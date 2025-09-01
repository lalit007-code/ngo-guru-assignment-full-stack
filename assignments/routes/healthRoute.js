import { Router } from "express";
import { healthcheck } from "../contorllers/healthController.js";

const router = Router();

router.route("/").get(healthcheck);

export default router;

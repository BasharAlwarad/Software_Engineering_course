import express from "express";
import { login, getProfile } from "../controllers/users.js";
import { authenticate } from "../middlewares/authenticate.js";
import { validateUser } from "../middlewares/validateRequest.js";

const router = express.Router();

router.post("/login", validateUser, login);
router.get("/profile", authenticate, getProfile);

export default router;

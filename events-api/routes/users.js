import express from "express";
import { register } from "../controllers/users.js";
import { validateUser } from "../middlewares/validateRequest.js";

const router = express.Router();

router.post("/", validateUser, register);

export default router;

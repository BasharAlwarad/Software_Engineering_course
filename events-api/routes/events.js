import express from "express";
import { findUpcomingEvents } from "../controllers/events.js";

const router = express.Router();

router.get("/upcoming", findUpcomingEvents);

export default router;

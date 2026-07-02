import express from "express";
import eventsRouter from "./events.js";
import usersRouter from "./users.js";
import authRouter from "./auth.js";

import { dynamicModelMiddleware } from "../middlewares/dynamicModel.js";
import { paginationMiddleware } from "../middlewares/paginationMiddleware.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { authenticate } from "../middlewares/authenticate.js";

import {
  findAll,
  findOneById,
  createOne,
  updateOne,
  deleteOne,
} from "../controllers/CRUD.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/events", eventsRouter);

router.use("/:model", dynamicModelMiddleware);

router
  .route("/:model")
  .get(paginationMiddleware, findAll)
  .post(authenticate, validateRequest, createOne);

router
  .route("/:model/:id")
  .get(findOneById)
  .put(authenticate, validateRequest, updateOne)
  .delete(authenticate, deleteOne);

export default router;

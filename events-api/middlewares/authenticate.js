import jwt from "jsonwebtoken";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return next(new ErrorResponse("Forbidden", 403));

    const payload = await jwt.verify(token, process.env.JWT_SECRET ?? "secret");
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};

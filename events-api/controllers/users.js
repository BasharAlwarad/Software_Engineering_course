import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../db.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const register = asyncWrapper(async (req, res, next) => {
  const {
    body: { email, password },
  } = req;

  const found = await User.findOne({ where: { email } });

  if (found) throw new ErrorResponse("User Already Exist", 409);

  const user = await User.create({ email, password });

  res.json(user);
});

export const login = asyncWrapper(async (req, res, next) => {
  const {
    body: { email, password },
  } = req;

  const user = await User.scope("withPassword").findOne({ where: { email } });

  if (!user)
    throw new ErrorResponse("Forbidden. Invalid email or password", 403);

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    throw new ErrorResponse("Forbidden. Invalid email or password", 403);

  const payload = { id: user.id, email: user.email };

  const token = jwt.sign(payload, process.env.JWT_SECRET ?? "secret", {
    expiresIn: 3600000,
  });

  res.json({ user: payload, token });
});

export const getProfile = asyncWrapper(async (req, res, next) => {
  const {
    user: { id },
  } = req;
  const user = await User.findByPk(id);
  res.json(user);
});

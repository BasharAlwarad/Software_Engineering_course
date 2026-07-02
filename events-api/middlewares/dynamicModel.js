import { sequelize } from "../db.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const dynamicModelMiddleware = (req, res, next) => {
  let modelName = `${req.params?.model
    .charAt(0)
    .toUpperCase()}${req.params.model.slice(1, -1)}`;

  const model = sequelize.models[modelName];

  if (!model) throw new ErrorResponse("Model not found", 404);

  req.model = model;
  next();
};

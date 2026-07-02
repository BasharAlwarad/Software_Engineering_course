import { userSchema } from "../schemas/users.js";
import { eventSchema } from "../schemas/events.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const validateRequest = (req, res, next) => {
  const {
    params: { model },
    method,
  } = req;
  let schema;

  switch (model) {
    case "users":
      schema = userSchema[method];
      break;
    case "events":
      schema = eventSchema[method];
      req.body.organizerId = req.user.id;
      break;
    default:
      return next(new ErrorResponse("Invalid model specified", 404));
  }

  const { error } = schema?.validate(req.body);
  if (error) return next(new ErrorResponse(error, 400));
  next();
};

export const validateUser = (req, res, next) => {
  const { error } = userSchema.POST.validate(req.body);
  if (error) return next(new ErrorResponse(error, 400));
  next();
};

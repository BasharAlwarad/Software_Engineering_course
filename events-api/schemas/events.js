import Joi from "joi";

export const eventSchema = {
  POST: Joi.object({
    title: Joi.string().min(3).max(255).required(),
    description: Joi.string().max(5000).optional(),
    date: Joi.date().iso().required(),
    location: Joi.string().max(255).required(),
    latitude: Joi.number().precision(8).optional().allow(null),
    longitude: Joi.number().precision(8).optional().allow(null),
    organizerId: Joi.number().integer().required(),
  }),
  PUT: Joi.object({
    title: Joi.string().min(3).max(255).optional(),
    description: Joi.string().max(5000).optional(),
    date: Joi.date().iso().optional(),
    location: Joi.string().max(255).optional(),
    latitude: Joi.number().precision(8).optional().allow(null),
    longitude: Joi.number().precision(8).optional().allow(null),
    organizerId: Joi.number().integer().optional(),
  }),
};

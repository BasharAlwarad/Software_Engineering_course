import { Op } from "sequelize";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { Event } from "../db.js";

export const findUpcomingEvents = asyncWrapper(async (req, res, next) => {
  const upcomingEvents = await Event.findAll({
    where: {
      date: {
        [Op.gt]: new Date(),
      },
    },
    order: [["date", "ASC"]],
  });

  res.json(upcomingEvents);
});

import { asyncWrapper } from "../utils/asyncWrapper.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const findAll = asyncWrapper(async (req, res, next) => {
  const { page, limit, offset } = res.pagination;
  const records = await req.model.findAndCountAll({
    offset,
    limit,
    order: [["createdAt", "DESC"]],
  });

  const totalCount = records.count;
  const totalPages = Math.ceil(totalCount / limit);

  const paginationData = {
    totalCount,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };

  res.json({ ...paginationData, results: records.rows });
});

export const findOneById = asyncWrapper(async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const record = await req.model.findByPk(id);
  res.json(record);
});

export const createOne = asyncWrapper(async (req, res, next) => {
  const { body } = req;
  const record = await req.model.create(body);
  res.status(201).json(record);
});

export const updateOne = asyncWrapper(async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  const hooks = req.model.options?.hooks || {};
  const hasUpdateHooks =
    (hooks.beforeUpdate?.length ?? 0) > 0 ||
    (hooks.afterUpdate?.length ?? 0) > 0;

  const [updated] = await req.model.update(body, {
    where: { id },
    individualHooks: hasUpdateHooks,
  });

  if (!updated) {
    throw new ErrorResponse("Record not found", 404);
  }
  const updatedRecord = await req.model.findByPk(id);
  res.json(updatedRecord);
});

export const deleteOne = asyncWrapper(async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const deleted = await req.model.destroy({
    where: { id },
  });

  if (!deleted) {
    throw new ErrorResponse("Record not found", 404);
  }
  res.status(204).end();
});

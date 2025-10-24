// 404 handler for undefined routes
import type { RequestHandler } from 'express';

/**
 * Catches requests to routes that don't exist
 * Returns 404 Not Found error
 */
const notFoundHandler: RequestHandler = (req, res, next) => {
  next(new Error('Not Found', { cause: { status: 404 } }));
};

export default notFoundHandler;

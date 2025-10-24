// Global error handler middleware
import type { ErrorRequestHandler } from 'express';

/**
 * Catches all errors thrown in the application
 * Sends appropriate HTTP status codes and error messages
 * Shows stack traces in development (hidden in production)
 */
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Log error stack in development mode only
  process.env.NODE_ENV !== 'production' && console.error(`\x1b[31m${err.stack || err}\x1b[0m`);

  // Extract status code from various error formats (defaults to 500)
  const statusFromCause =
    typeof (err as any)?.cause?.status === 'number' ? (err as any).cause.status : undefined;
  const status =
    typeof (err as any)?.status === 'number'
      ? (err as any).status
      : typeof (err as any)?.statusCode === 'number'
      ? (err as any).statusCode
      : statusFromCause ?? 500;

  // Build error response payload
  if (err instanceof Error) {
    const payload: Record<string, unknown> = { message: err.message };
    // Include extra debug info in development
    if (process.env.NODE_ENV !== 'production') {
      payload.stack = err.stack;
      if (statusFromCause && statusFromCause >= 400 && statusFromCause < 600) {
        payload.cause = (err as any).cause;
      }
    }
    res.status(status).json(payload);
    return;
  }

  // Fallback for non-Error objects
  res.status(status).json({ message: 'Internal server error' });
  return;
};

export default errorHandler;

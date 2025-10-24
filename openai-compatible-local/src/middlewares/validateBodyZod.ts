// Request body validation middleware using Zod schemas
import type { RequestHandler } from 'express';
import type { ZodSchema } from 'zod';

/**
 * Validates incoming request body against a Zod schema
 * Returns 400 Bad Request if validation fails
 * Passes validated data to next middleware if successful
 */
const validateBodyZod =
  <T>(zodSchema: ZodSchema<T>): RequestHandler =>
  (req, res, next) => {
    // Parse and validate request body
    const result = zodSchema.safeParse(req.body);

    if (!result.success) {
      // Format validation errors into readable message
      const errorMessage = result.error.issues
        .map(issue => `${issue.path.join('.')}: ${issue.message}`)
        .join('; ');

      // Pass error to error handler with 400 status
      next(
        new Error(`Validation failed: ${errorMessage}`, {
          cause: {
            status: 400
          }
        })
      );
    } else {
      // Replace body with validated/typed data
      req.body = result.data;
      next();
    }
  };

export default validateBodyZod;

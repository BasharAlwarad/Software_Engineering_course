// Centralized type definitions used across the application
import { z } from 'zod';
import { promptBodySchema } from '#schemas';

/**
 * Type for incoming prompt requests
 * Inferred from Zod schema to ensure type safety
 */
export type IncomingPrompt = z.infer<typeof promptBodySchema>;

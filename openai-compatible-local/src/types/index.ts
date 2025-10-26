// Centralized type definitions used across the application
import { z } from 'zod';
import { FinalResponse, promptBodySchema } from '#schemas';

/**
 * Type for incoming prompt requests
 * Inferred from Zod schema to ensure type safety
 */
export type IncomingPrompt = z.infer<typeof promptBodySchema>;

/**
 * Error response structure
 * Used when requests fail or are invalid (e.g., non-Pokemon questions)
 */
export type ErrorResponseDTO = {
  success: false;
  error: string;
};

/**
 * Final response structure for tool calling endpoints
 * Can be either:
 * - Structured FinalResponse (Pokemon data)
 * - ErrorResponseDTO (validation/API errors)
 * - Simple completion string (fallback)
 */
export type FinalResponseDTO =
  | z.infer<typeof FinalResponse>
  | ErrorResponseDTO
  | { completion: string };

// Zod schemas for request validation
import { z } from 'zod';

/**
 * Schema for AI prompt requests
 * Validates that requests have:
 * - prompt: string (1-1000 characters)
 * - stream: optional boolean (default: false)
 */
export const promptBodySchema = z.object({
  prompt: z
    .string()
    .min(1, 'Prompt cannot be empty')
    .max(1000, 'Prompt cannot exceed 1000 characters'),
  stream: z.boolean().optional().default(false)
});

/**
 * Schema for intent checking (Step 1 of tool calling)
 * Determines if the user's question is about Pokemon
 */
export const Intent = z.object({
  isPokemon: z.boolean().describe('Whether the question is about Pokemon')
});

/**
 * Schema for final structured response (Step 2 of tool calling)
 * Enforces specific JSON shape for Pokemon data or errors
 * Used with zodResponseFormat to guarantee output structure
 */
export const FinalResponse = z.object({
  isPokemon: z.boolean(),
  pokemonInfo: z
    .object({
      id: z.number(),
      name: z.string(),
      aboutSpecies: z.string(),
      types: z.array(z.string()),
      abilities: z.array(z.string()),
      abilitiesExplained: z.string(),
      frontSpriteURL: z.string()
    })
    .optional()
    .nullable(),
  error: z.string().optional().nullable()
});

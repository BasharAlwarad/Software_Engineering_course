/**
 * OpenAI SDK with Structured Outputs
 *
 * What this file shows
 * - How to use the official OpenAI SDK Responses API with Zod schemas.
 * - The SDK can parse/validate the model output into a known JSON shape.
 *
 * Why structured outputs?
 * - Predictable, parseable responses for production systems.
 * - Type-safe in TypeScript when combined with Zod.
 */
import OpenAI from 'openai';
import { zodTextFormat } from 'openai/helpers/zod';
import { z } from 'zod';

/**
 * Call OpenAI Responses API via the SDK and validate output with Zod.
 * @param prompt The user prompt to send to the model.
 * @returns Parsed/validated output in the requested schema.
 */
export async function openaiSdkStructured(prompt: string) {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  // Define the structure we want the response to follow
  const CustomSchema = z.object({
    originalPrompt: z.string(),
    generatedResponse: z.string(),
  });

  const response = await client.responses.parse({
    model: 'gpt-4o-mini',
    input: prompt,
    text: {
      format: zodTextFormat(CustomSchema, 'CustomResponse'),
    },
    // You could add: temperature: 0.2, max_output_tokens: 256, etc.
  });
  return response.output;
}

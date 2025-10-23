/**
 * OpenAI Responses API (REST)
 *
 * What this file shows
 * - How to use the newer Responses endpoint with plain fetch.
 * - This API has first-class support for tools/function-calling and structured outputs.
 *
 * Contract
 * - Input: prompt (string)
 * - Output: response.output (the model's result in a normalized format)
 *
 * Notes
 * - Requires OPENAI_API_KEY. Prefer the official SDK for production (see openai-sdk-structured.ts).
 */
import { type Responses } from 'openai/resources';

/**
 * Call OpenAI Responses via REST.
 * @param prompt The user prompt.
 * @returns The model's output field from the Responses API.
 */
export async function openaiResponsesRest(prompt: string) {
  const res = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      input: prompt,
      // Optional: tools, tool_choice, response_format, input as structured blocks
      // Example:
      // response_format: { type: 'json_schema', json_schema: { ... } },
    }),
  });
  const response = (await res.json()) as Responses.Response;
  return response.output;
}

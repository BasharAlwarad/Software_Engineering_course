/**
 * OpenAI Chat Completions API (REST)
 *
 * What this file shows
 * - How to call OpenAI's classic Chat Completions endpoint using fetch.
 * - The request includes a system message (role/instructions) and a user prompt.
 *
 * Contract
 * - Input: prompt (string)
 * - Output: the full ChatCompletion JSON object from OpenAI (includes choices, usage, etc.)
 *
 * Notes
 * - This is the older API many apps still use. Newer projects often prefer the Responses API or the SDK.
 * - You must set OPENAI_API_KEY in your .env file.
 */
import { type ChatCompletion } from 'openai/resources';

/**
 * Call OpenAI Chat Completions via REST.
 * @param prompt A natural-language question or instruction for the assistant.
 * @returns The raw ChatCompletion JSON response.
 * @example
 * const data = await openaiChatRest("Summarize TypeScript in one sentence.");
 * console.log(data.choices[0].message?.content);
 */
export async function openaiChatRest(prompt: string) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a concise assistant.' },
        { role: 'user', content: prompt },
      ],
      // Optional knobs students can experiment with:
      // temperature: 0.2, // lower = more deterministic, higher = more creative
      // max_tokens: 256,   // upper bound on generated tokens (roughly words/subwords)
    }),
  });
  const data = (await res.json()) as ChatCompletion;
  return data;
}

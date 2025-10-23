/**
 * Google Gemini generateContent API (REST)
 *
 * What this file shows
 * - Making a direct HTTP request to Gemini's REST API with a text-only prompt.
 * - Gemini is multimodal (can also accept images/audio/video), but we keep it simple here.
 */
import type { GenerateContentResponse } from '@google/generative-ai';

/**
 * Call the Gemini REST API with a text prompt.
 * @param prompt The user prompt.
 * @returns The full GenerateContentResponse JSON.
 */
export async function geminiRest(prompt: string) {
  const model = 'gemini-2.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'X-goog-api-key': process.env.GEMINI_API_KEY!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    }),
  });
  const json = (await res.json()) as GenerateContentResponse;
  return json;
}

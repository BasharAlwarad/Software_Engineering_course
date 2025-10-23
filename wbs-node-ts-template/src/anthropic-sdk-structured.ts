/**
 * Anthropic SDK with JSON-shaped output (prompted)
 *
 * What this file shows
 * - Using the official Anthropic SDK to request a JSON-looking response.
 * - Unlike OpenAI's schema-parsed approach, we rely on instructions (less strict).
 */
import Anthropic from '@anthropic-ai/sdk';

/**
 * Request a JSON-shaped answer from Claude using the SDK.
 * @param prompt The user prompt.
 * @returns The raw SDK message response.
 */
export async function anthropicSdkStructured(prompt: string) {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const msg = await anthropic.messages.create({
    model: 'claude-3-haiku-20240307',
    max_tokens: 256,
    system:
      'Respond in a structured JSON format with originalPrompt (string) and generatedResponse (string) fields. Do not include any other fields or markdown artifacts.',
    messages: [{ role: 'user', content: prompt }],
    // Tip: You can tune temperature or add additional guardrails in the system prompt.
  });

  return msg;
}

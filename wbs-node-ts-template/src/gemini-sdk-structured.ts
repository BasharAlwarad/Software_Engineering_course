/**
 * Google Gen AI SDK with Structured Output
 *
 * What this file shows
 * - Using the Google Generative AI SDK with a responseSchema to enforce JSON structure.
 * - When responseMimeType is application/json and a schema is provided, Gemini aims to emit valid JSON.
 */
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';

/**
 * Request a structured JSON response from Gemini using a schema.
 * @param prompt The user prompt.
 * @returns The SDK response object (use .response.text() or .response.candidates to inspect).
 */
export async function geminiSdkStructured(prompt: string) {
  const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = ai.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: SchemaType.OBJECT,
        properties: {
          originalPrompt: { type: SchemaType.STRING },
          generatedResponse: { type: SchemaType.STRING },
        },
        required: ['originalPrompt', 'generatedResponse'],
      },
    },
  });

  const response = await model.generateContent(prompt);

  return response;
}

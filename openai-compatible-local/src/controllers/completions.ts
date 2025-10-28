// AI completion controllers - simplified (no streaming)
import type { RequestHandler } from 'express';
import type { IncomingPrompt } from '#types';
import OpenAI from 'openai';

// Type definitions for request/response
type ResponseCompletion = { completion: string };

/**
 * Controller: Handle Ollama completions (local AI)
 * Uses environment variables to switch between local (Ollama) and cloud (OpenAI)
 */
export const createOllamaCompletion: RequestHandler<
  unknown,
  ResponseCompletion,
  IncomingPrompt
> = async (req, res) => {
  // Extract prompt from validated request body
  const { prompt } = req.body;

  // Initialize OpenAI client
  // In development: points to local Ollama server
  // In production: points to OpenAI cloud API
  const client = new OpenAI({
    apiKey:
      process.env.NODE_ENV === 'development'
        ? process.env.OLLAMA_API_KEY // Dummy key for local (required by SDK)
        : process.env.OPENAI_API_KEY, // Real API key for cloud
    baseURL: process.env.NODE_ENV === 'development' ? process.env.OLLAMA_URL : undefined
  });

  // Call AI model with chat completion
  const completion = await client.chat.completions.create({
    model:
      process.env.NODE_ENV === 'development'
        ? process.env.OLLAMA_MODEL! // Local model name (e.g., qwen2.5:0.5b)
        : process.env.OPENAI_MODEL!, // Cloud model name (e.g., gpt-4)
    messages: [
      { role: 'developer', content: 'You are a helpful assistant' }, // System instruction
      { role: 'user', content: prompt } // User's question
    ]
  });

  // Send response with generated completion
  res
    .status(200)
    .json({ completion: completion.choices[0]?.message.content || 'No completion generated' });
};

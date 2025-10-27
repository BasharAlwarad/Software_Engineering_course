// AI completion controllers - handle requests to local/cloud AI models
import type { RequestHandler } from 'express';
import type { ChatCompletionCreateParamsNonStreaming } from 'openai/resources';
import type { IncomingPrompt } from '#types';
import { createOpenAICompletion } from '#utils';
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

/**
 * Controller: Handle LMS completions (alternative local AI provider like LM Studio)
 * Supports both streaming and non-streaming responses
 */
export const createLMSCompletion: RequestHandler<
  unknown,
  ResponseCompletion,
  IncomingPrompt
> = async (req, res) => {
  // Extract prompt and stream flag from validated request body
  const { prompt, stream } = req.body;

  // Initialize OpenAI client with LMS settings
  const client = new OpenAI({
    apiKey:
      process.env.NODE_ENV === 'development' ? process.env.LMS_API_KEY : process.env.OPENAI_API_KEY,
    baseURL: process.env.NODE_ENV === 'development' ? process.env.LMS_URL : undefined
  });

  // Prepare the base request for LMS
  const baseRequest: ChatCompletionCreateParamsNonStreaming = {
    model:
      process.env.NODE_ENV === 'development' ? process.env.LMS_MODEL! : process.env.OPENAI_MODEL!,
    messages: [
      { role: 'developer', content: 'You are a helpful assisstant' },
      { role: 'user', content: prompt }
    ]
  };

  // Utility function handles both streaming (SSE) and non-streaming responses
  await createOpenAICompletion(client, res, baseRequest, stream);
};

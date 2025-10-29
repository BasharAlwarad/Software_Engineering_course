/**
 * AGENT CONFIGURATION
 * Centralizes model configuration for all agents
 * Supports both local (Ollama) and cloud (OpenAI) models
 */
import OpenAI from 'openai';
import { OpenAIChatCompletionsModel, setDefaultOpenAIClient } from '@openai/agents';

/**
 * Initialize and configure the OpenAI client for agents
 * Points to Ollama in development, OpenAI in production
 *
 * IMPORTANT: Call this ONCE before creating any agents
 */
export const initializeAgentClient = () => {
  const client = new OpenAI({
    apiKey:
      process.env.NODE_ENV === 'development'
        ? process.env.OLLAMA_API_KEY || 'ollama'
        : process.env.OPENAI_API_KEY,
    baseURL: process.env.NODE_ENV === 'development' ? process.env.OLLAMA_URL : undefined
  }) as any; // Type assertion needed due to package version mismatch

  // Set as default client for all agents
  setDefaultOpenAIClient(client);

  return client;
};

/**
 * Get the appropriate model name based on environment
 * Returns model string that works with the configured client
 */
export const getModelConfig = (): OpenAIChatCompletionsModel | string => {
  if (process.env.NODE_ENV === 'development') {
    // Use chat.completions on local OpenAI-compatible servers (e.g., Ollama/LM Studio)
    const client = new OpenAI({
      apiKey: process.env.OLLAMA_API_KEY || 'ollama',
      baseURL: process.env.OLLAMA_URL
    }) as any;
    return new OpenAIChatCompletionsModel(client, process.env.OLLAMA_MODEL || 'llama3.1:8b');
  }
  // Production: use OpenAI cloud models via Responses API
  return process.env.OPENAI_MODEL || 'gpt-4o-mini';
};

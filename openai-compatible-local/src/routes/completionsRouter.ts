// API routes for AI completion endpoints
import { Router } from 'express';
import { createOllamaCompletion, createToolCallingCompletion } from '#controllers';
import { validateBodyZod } from '#middlewares';
import { promptBodySchema } from '#schemas';

// Initialize router
const completionsRouter = Router();

// POST /ai/ollama - Send prompts to Ollama (local AI)
// Validates request body before passing to controller
completionsRouter.post('/ollama', validateBodyZod(promptBodySchema), createOllamaCompletion);

// POST /ai/tool-calling - Demonstrate tool calling with Pokemon API
// Multi-step flow: intent check → function execution → structured response
// Requires Ollama with a tool-calling capable model (e.g., llama3.1:8b)
completionsRouter.post(
  '/tool-calling',
  validateBodyZod(promptBodySchema),
  createToolCallingCompletion
);

export default completionsRouter;

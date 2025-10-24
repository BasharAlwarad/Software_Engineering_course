// API routes for AI completion endpoints
import { Router } from 'express';
import { createLMSCompletion, createOllamaCompletion } from '#controllers';
import { validateBodyZod } from '#middlewares';
import { promptBodySchema } from '#schemas';

// Initialize router
const completionsRouter = Router();

// POST /ai/ollama - Send prompts to Ollama (local AI)
// Validates request body before passing to controller
completionsRouter.post('/ollama', validateBodyZod(promptBodySchema), createOllamaCompletion);

// POST /ai/lms - Send prompts to LM Studio or other OpenAI-compatible provider
// Supports streaming and non-streaming responses
completionsRouter.post('/lms', validateBodyZod(promptBodySchema), createLMSCompletion);

export default completionsRouter;

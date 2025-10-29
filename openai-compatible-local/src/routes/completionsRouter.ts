// API routes for AI completion endpoints
import { Router } from 'express';
import { createCustomerSupportCompletion } from '#controllers';
import { validateBodyZod } from '#middlewares';
import { promptBodySchema } from '#schemas';

// Initialize router
const completionsRouter = Router();

// POST /ai/customer-support - Agentic AI customer support flow
// Demonstrates the Agents SDK with guardrails, handoffs, and specialized agents
// Multi-agent system: guardrail → orchestrator → specialist agents (support/sales/refunds/escalation)
// Each agent can call tools and the orchestrator routes based on customer intent
completionsRouter.post(
  '/customer-support',
  validateBodyZod(promptBodySchema),
  createCustomerSupportCompletion
);

export default completionsRouter;

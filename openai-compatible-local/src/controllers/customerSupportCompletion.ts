/**
 * CUSTOMER SUPPORT COMPLETION CONTROLLER
 * Handles agentic AI flow for customer support using OpenAI Agents SDK
 *
 * This demonstrates the evolution from simple completions → tool calling → agentic workflows
 */
import type { RequestHandler } from 'express';
import type { IncomingPrompt } from '#types';
import { run } from '@openai/agents';
import { orchestratorAgent, initializeAgentClient, InputGuardrailTripwireTriggered } from '#agents';

// Initialize the agent client on module load
// This sets up the OpenAI client for all agents to use
initializeAgentClient();

/**
 * Response type for customer support endpoint
 */
type CustomerSupportResponse =
  | {
      success: true;
      response: string;
    }
  | {
      success: false;
      error: string;
      reason?: string;
    };

/**
 * Controller: Handle customer support requests via agentic AI
 *
 * Flow:
 * 1. Input guardrail checks if query is relevant to our business
 * 2. Orchestrator agent routes to appropriate specialist (sales, refunds, escalation, support)
 * 3. Specialist agent handles the request (may call tools)
 * 4. Structured response returned to user
 */
export const createCustomerSupportCompletion: RequestHandler<
  unknown,
  CustomerSupportResponse,
  IncomingPrompt
> = async (req, res) => {
  const { prompt } = req.body;

  try {
    console.log('\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m');
    console.log(`\x1b[36m🤖 Customer Support Request: "${prompt}"\x1b[0m`);
    console.log('\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m');

    // Run the orchestrator agent
    // It will:
    // - Check guardrails
    // - Route to appropriate agent
    // - Execute any needed tools
    // - Return final response
    const result = await run(orchestratorAgent, prompt);

    console.log('\x1b[32m✓ Agent completed successfully\x1b[0m');
    console.log('\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n');

    // Return successful response
    res.status(200).json({
      success: true,
      response: result.finalOutput || 'No response generated'
    });
  } catch (error: unknown) {
    // Handle guardrail failures (off-topic queries)
    if (error instanceof InputGuardrailTripwireTriggered) {
      console.log('\x1b[33m⚠️  Guardrail triggered - query not relevant\x1b[0m');
      console.log('\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n');

      res.status(400).json({
        success: false,
        error:
          'Your question does not appear to be related to CloudPillow Co. products or services.',
        reason: 'guardrail_triggered'
      });
      return;
    }

    // Handle other errors (let global error handler deal with it)
    console.error('\x1b[31m✗ Agent error occurred\x1b[0m');
    console.log('\x1b[36m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n');
    throw error;
  }
};

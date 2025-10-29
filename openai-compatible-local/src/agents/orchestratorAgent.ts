/**
 * ORCHESTRATOR AGENT
 * Main triage agent that routes customer queries to specialized agents
 * Implements guardrails and handoffs for complete agentic workflow
 */
import { Agent, handoff, type InputGuardrail, run } from '@openai/agents';
import { InputGuardrailTripwireTriggered } from '@openai/agents';
import { z } from 'zod';
import { getModelConfig } from './config.ts';
import { guardrailAgent } from './guardrailAgent.ts';
import { customerSupportAgent } from './customerSupportAgent.ts';
import { escalationAgent } from './escalationAgent.ts';
import { salesAgent } from './salesAgent.ts';
import { refundsAgent } from './refundsAgent.ts';

/**
 * Input schema for escalation handoffs
 * Captures why conversation is being escalated
 */
const EscalationData = z.object({
  reason: z.string().describe('Why the customer is being escalated')
});
type EscalationData = z.infer<typeof EscalationData>;

/**
 * GUARDRAIL IMPLEMENTATION
 * Validates customer queries are about CloudPillow Co. before processing
 */
const pillowGuardrail: InputGuardrail = {
  name: 'CloudPillow Intent Guardrail',
  execute: async ({ input, context }) => {
    // Run guardrail agent to check intent
    const result = await run(guardrailAgent, input, { context });

    return {
      outputInfo: result.finalOutput,
      // Trigger if query is NOT relevant
      tripwireTriggered: !(result.finalOutput?.isRelevant ?? true)
    };
  }
};

/**
 * ORCHESTRATOR AGENT
 * Routes conversations to appropriate specialists
 */
export const orchestratorAgent = Agent.create({
  name: 'CloudPillow Support Orchestrator',
  instructions: `You are the main triage agent for CloudPillow Co. customer support.
    
    Your ONLY job is to route customers to the right specialist:
    
    1. Customer Support Agent - General questions about products, shipping, warranty
    2. Sales Agent - Pricing, bulk orders, discounts, promotions
    3. Refunds Agent - Returns, refunds, exchanges, warranty claims
    4. Escalation Agent - Angry/frustrated customers, complaints, urgent issues
    
    Decision rules:
    - If customer is upset/angry/frustrated → Escalation Agent
    - If asking about prices/bulk orders/discounts → Sales Agent  
    - If wants to return/refund/exchange → Refunds Agent
    - For general questions → Customer Support Agent
    
    IMPORTANT: 
    - Do NOT answer questions yourself
    - Make a decision quickly based on customer tone and request
    - Route to the most appropriate agent
    - When in doubt, use Customer Support Agent`,
  model: getModelConfig(),
  inputGuardrails: [pillowGuardrail],
  handoffs: [
    customerSupportAgent,
    salesAgent,
    refundsAgent,
    // Custom handoff with callback for escalations
    handoff(escalationAgent, {
      inputType: EscalationData,
      onHandoff: async (ctx, input) => {
        // Log when escalations happen for monitoring
        console.log(
          `\x1b[31m⚠️  ESCALATION TRIGGERED: ${input?.reason || 'No reason provided'}\x1b[0m`
        );
      }
    })
  ]
});

// Export the error type for use in controllers
export { InputGuardrailTripwireTriggered };

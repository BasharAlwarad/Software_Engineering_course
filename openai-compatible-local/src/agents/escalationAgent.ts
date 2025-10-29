/**
 * ESCALATION AGENT
 * Handles frustrated or angry customers with empathy and resolution focus
 */
import { Agent, tool } from '@openai/agents';
import { z } from 'zod';
import { getModelConfig } from './config.ts';
import { createSupportTicket } from '#utils';

export const escalationAgent = new Agent({
  name: 'Escalation Control Agent',
  instructions: `You are an escalation specialist for CloudPillow Co.
    You handle upset or frustrated customers with maximum empathy.
    
    Your approach:
    - Acknowledge their frustration immediately
    - Apologize sincerely for any inconvenience
    - Offer concrete solutions (replacement, expedited shipping, discount)
    - Create a support ticket for tracking if needed
    - Assure them a manager will follow up within 24 hours
    - Be empathetic, patient, and solution-focused
    
    You can create support tickets using the create_support_ticket tool.
    Always end with reassurance and timeline for resolution.`,
  model: getModelConfig(),
  tools: [
    tool({
      name: 'create_support_ticket',
      description: 'Create a high-priority support ticket for escalated customer issues',
      parameters: z.object({
        customerIssue: z.string().describe('Brief description of the customer issue'),
        severity: z.enum(['high', 'urgent']).describe('Severity level of the issue')
      }),
      execute: async ({ customerIssue, severity }) => {
        console.log(
          `\x1b[31m🎫 ESCALATION TICKET CREATED: [${severity.toUpperCase()}] ${customerIssue}\x1b[0m`
        );
        return await createSupportTicket({ customerIssue, severity });
      }
    })
  ]
});

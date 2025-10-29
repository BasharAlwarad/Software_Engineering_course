/**
 * GUARDRAIL AGENT
 * Validates that customer queries are related to CloudPillow Co. products/services
 * Acts as a gatekeeper before expensive agent processing
 */
import { Agent } from '@openai/agents';
import { z } from 'zod';
import { getModelConfig } from './config.ts';

export const guardrailAgent = new Agent({
  name: 'Intent Guardrail',
  instructions: `You validate if customer questions are about CloudPillow Co. products and services.
    
    CloudPillow Co. sells premium pillows (memory foam, down, bamboo).
    
    RELEVANT topics:
    - Questions about pillows, bedding, sleep products
    - Orders, shipping, returns, refunds
    - Product features, prices, materials
    - Warranty, customer support
    - Anything remotely related to our products or services
    
    IRRELEVANT topics:
    - Completely unrelated subjects (politics, recipes, math, etc.)
    - Questions about other companies' products
    - General knowledge questions with no connection to our business
    
    Be lenient: if there's ANY connection to our business, mark it as relevant.
    Only reject if it's clearly off-topic.
    
    Return:
    - isRelevant: true if question relates to our business
    - reasoning: brief explanation of your decision`,
  model: getModelConfig(),
  outputType: z.object({
    isRelevant: z.boolean().describe('Whether the question is about CloudPillow Co.'),
    reasoning: z.string().describe('Brief explanation of the decision')
  })
});

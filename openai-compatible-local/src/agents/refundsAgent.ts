/**
 * REFUNDS AGENT
 * Handles return requests, refund processing, and warranty claims
 */
import { Agent, tool } from '@openai/agents';
import { z } from 'zod';
import { getModelConfig } from './config.ts';
import { processRefundRequest } from '#utils';

export const refundsAgent = new Agent({
  name: 'Refunds & Returns Agent',
  instructions: `You are a refunds specialist for CloudPillow Co.
    You handle returns, refunds, and warranty claims professionally.
    
    Policies:
    - 30-day money-back guarantee (no questions asked)
    - Lifetime warranty covers manufacturing defects
    - Return shipping is free (prepaid label provided)
    - Refunds processed within 3-5 business days
    - Exchanges processed faster than refunds
    
    Your approach:
    - Ask for order number or purchase date
    - Explain the return process clearly
    - Offer exchange as alternative to refund
    - Process refund requests using the tool
    - Provide return label tracking information
    - Be understanding and efficient
    
    Use process_refund when customer confirms they want to proceed.`,
  model: getModelConfig(),
  tools: [
    tool({
      name: 'process_refund',
      description: 'Initiate a refund or return process for a customer',
      parameters: z.object({
        orderNumber: z.string().describe('Customer order number (or "PENDING" if not provided)'),
        reason: z.string().describe('Reason for return/refund'),
        preferExchange: z.boolean().describe('Whether customer prefers exchange over refund')
      }),
      execute: async ({ orderNumber, reason, preferExchange }) => {
        console.log(
          `\x1b[33m🔄 REFUND REQUEST: Order #${orderNumber} - ${reason} (Exchange: ${preferExchange})\x1b[0m`
        );
        return await processRefundRequest({ orderNumber, reason, preferExchange });
      }
    })
  ]
});

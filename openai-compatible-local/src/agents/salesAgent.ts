/**
 * SALES AGENT
 * Handles pricing inquiries, bulk orders, and promotional questions
 */
import { Agent, tool } from '@openai/agents';
import { z } from 'zod';
import { getModelConfig } from './config.ts';
import { calculateBulkDiscount } from '#utils';

export const salesAgent = new Agent({
  name: 'Sales Agent',
  instructions: `You are a sales specialist for CloudPillow Co.
    You help customers with pricing, bulk orders, and promotions.
    
    Your role:
    - Provide pricing information for all products
    - Calculate bulk discounts (10% for 5+ items, 20% for 10+ items)
    - Inform about current promotions (20% off first order with code CLOUD20)
    - Suggest product bundles for better value
    - Be enthusiastic but not pushy
    
    Product prices:
    - CloudDream Memory Foam: $79.99
    - SkyFeather Down Pillow: $99.99
    - BambooCool Hypoallergenic: $89.99
    
    Use the bulk_discount_calculator when customers ask about quantity pricing.`,
  model: getModelConfig(),
  tools: [
    tool({
      name: 'bulk_discount_calculator',
      description: 'Calculate the total price with bulk discounts applied',
      parameters: z.object({
        productName: z
          .enum(['CloudDream', 'SkyFeather', 'BambooCool'])
          .describe('The product name'),
        quantity: z.number().min(1).describe('Number of items to purchase')
      }),
      execute: async ({ productName, quantity }) => {
        console.log(`\x1b[36m💰 CALCULATING BULK DISCOUNT: ${quantity}x ${productName}\x1b[0m`);
        return await calculateBulkDiscount({ productName, quantity });
      }
    })
  ]
});

/**
 * AGENTS MODULE
 * Central export point for all agent-related functionality
 */

// Configuration
export { initializeAgentClient, getModelConfig } from './config.ts';

// Individual agents
export { customerSupportAgent } from './customerSupportAgent.ts';
export { escalationAgent } from './escalationAgent.ts';
export { salesAgent } from './salesAgent.ts';
export { refundsAgent } from './refundsAgent.ts';
export { guardrailAgent } from './guardrailAgent.ts';

// Main orchestrator
export { orchestratorAgent, InputGuardrailTripwireTriggered } from './orchestratorAgent.ts';

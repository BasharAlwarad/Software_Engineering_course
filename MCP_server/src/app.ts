/**
 * MCP POKEMON SERVER - Chapter 23
 *
 * This MCP server demonstrates the Model Context Protocol with Pokemon data.
 * It provides tools, resources, and prompts that can be used by any MCP-compatible host
 * such as VS Code Copilot, Claude Desktop, or Gemini CLI.
 *
 * Architecture:
 * - Tools: Model-invoked actions (get_pokemon, compare_pokemon, etc.)
 * - Resources: Application-controlled context (pokedex data, type charts, etc.)
 * - Prompts: User-invoked templates (team building, type analysis, etc.)
 */

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { registerPokemonTools } from '#tools';
import { registerPokemonResources } from '#resources';
import { registerPokemonPrompts } from '#prompts';

/**
 * Initialize the MCP server
 */
const server = new McpServer({
  name: 'Pokemon MCP Server',
  version: '1.0.0'
});

console.log('\x1b[35m🚀 Initializing Pokemon MCP Server...\x1b[0m');

/**
 * Register all tools (model-invoked actions)
 * These are functions the AI model can decide to call based on user prompts
 */
registerPokemonTools(server);
console.log('\x1b[32m✅ Pokemon tools registered\x1b[0m');

/**
 * Register all resources (application-controlled context)
 * These provide additional context data that the application can inject
 */
registerPokemonResources(server);
console.log('\x1b[32m✅ Pokemon resources registered\x1b[0m');

/**
 * Register all prompts (user-invoked templates)
 * These are reusable prompt templates that help users interact with the server
 */
registerPokemonPrompts(server);
console.log('\x1b[32m✅ Pokemon prompts registered\x1b[0m');

/**
 * Connect the server using stdio transport
 * This allows communication via standard input/output streams
 * Perfect for local MCP hosts like VS Code Copilot
 */
const transport = new StdioServerTransport();
await server.connect(transport);

console.log('\x1b[35m🎮 Pokemon MCP Server ready and listening!\x1b[0m');

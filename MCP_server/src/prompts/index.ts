/**
 * MCP PROMPTS (User-Invoked Templates)
 *
 * Prompts are reusable templates that help users structure their interactions.
 * They are NOT automatically invoked by the model or application.
 * Users explicitly select prompts to guide their queries.
 *
 * In VS Code Copilot:
 * - Type /mcp.pokemon.prompt_name in chat
 * - Fill in any required parameters
 * - The prompt template is sent to the model
 */

import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

/**
 * Register all Pokemon-related prompts
 */
export const registerPokemonPrompts = (server: McpServer) => {
  /**
   * PROMPT: Pokemon Search
   * Template for searching for a Pokemon
   */
  server.registerPrompt(
    'pokemon_search',
    {
      title: 'Pokemon Search Prompt',
      description: 'A template to search for detailed information about a Pokemon',
      argsSchema: {
        pokemonName: z.string().describe('The name of the Pokemon to search for')
      }
    },
    async ({ pokemonName }) => ({
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `Tell me everything about ${pokemonName}. Include its type, abilities, stats, and evolution chain.`
          }
        }
      ]
    })
  );

  /**
   * PROMPT: Type Matchup Analysis
   * Template for analyzing type effectiveness
   */
  server.registerPrompt(
    'type_matchup',
    {
      title: 'Type Matchup Analysis',
      description: 'Analyze type advantages and disadvantages for a Pokemon',
      argsSchema: {
        pokemonName: z.string().describe('The Pokemon to analyze')
      }
    },
    async ({ pokemonName }) => ({
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `Analyze the type matchups for ${pokemonName}. What types is it strong against? What types is it weak to? Include the type effectiveness chart in your analysis.`
          }
        }
      ]
    })
  );

  /**
   * PROMPT: Team Builder
   * Template for building a balanced Pokemon team
   */
  server.registerPrompt(
    'team_builder',
    {
      title: 'Team Builder Prompt',
      description: 'Get help building a balanced Pokemon team',
      argsSchema: {
        starter: z.string().optional().describe('Optional starting Pokemon for the team')
      }
    },
    async ({ starter }) => ({
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: starter
              ? `Help me build a balanced competitive Pokemon team starting with ${starter}. Suggest 5 more Pokemon that complement it well, covering different types and roles.`
              : `Help me build a balanced competitive Pokemon team. Suggest 6 Pokemon that cover different types and have good type coverage together.`
          }
        }
      ]
    })
  );

  /**
   * PROMPT: Evolution Path
   * Template for exploring evolution chains
   */
  server.registerPrompt(
    'evolution_path',
    {
      title: 'Evolution Path Explorer',
      description: 'Explore the complete evolution chain of a Pokemon',
      argsSchema: {
        pokemonName: z.string().describe('The Pokemon to explore')
      }
    },
    async ({ pokemonName }) => ({
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `Show me the complete evolution chain for ${pokemonName}. Include evolution methods and level requirements if applicable.`
          }
        }
      ]
    })
  );

  /**
   * PROMPT: Pokemon Comparison
   * Template for comparing two Pokemon
   */
  server.registerPrompt(
    'compare_pokemon',
    {
      title: 'Pokemon Comparison',
      description: 'Compare two Pokemon side-by-side',
      argsSchema: {
        pokemon1: z.string().describe('First Pokemon to compare'),
        pokemon2: z.string().describe('Second Pokemon to compare')
      }
    },
    async ({ pokemon1, pokemon2 }) => ({
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `Compare ${pokemon1} and ${pokemon2}. Show their stats side-by-side, analyze which is stronger in different categories, and explain which one would win in a battle.`
          }
        }
      ]
    })
  );

  /**
   * PROMPT: Type Team Strategy
   * Template for mono-type team strategy
   */
  server.registerPrompt(
    'type_strategy',
    {
      title: 'Type-Based Team Strategy',
      description: 'Build a team focused on a specific type',
      argsSchema: {
        type: z.string().describe('Pokemon type to focus on (e.g., fire, water, electric)')
      }
    },
    async ({ type }) => ({
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `I want to build a ${type}-type focused team. Show me some strong ${type}-type Pokemon and explain strategies for covering their weaknesses.`
          }
        }
      ]
    })
  );

  console.log(
    '\x1b[36m  💬 Registered prompts: pokemon_search, type_matchup, team_builder, evolution_path, compare_pokemon, type_strategy\x1b[0m'
  );
};

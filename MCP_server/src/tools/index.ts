/**
 * MCP TOOLS (Model-Invoked Actions)
 *
 * Tools are functions that the AI model can decide to call based on the user's prompt.
 * The model analyzes the user's intent and determines which tool(s) to invoke.
 *
 * Examples:
 * - User: "Tell me about Pikachu" → Model calls get_pokemon("pikachu")
 * - User: "Compare Charizard and Blastoise" → Model calls compare_pokemon("charizard", "blastoise")
 */

import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getPokemon, formatPokemonSummary, comparePokemonStats } from '#utils';

/**
 * Register all Pokemon-related tools
 */
export const registerPokemonTools = (server: McpServer) => {
  /**
   * TOOL: Get Pokemon
   * Fetches detailed information about a single Pokemon
   */
  server.registerTool(
    'get_pokemon',
    {
      title: 'Get Pokemon Details',
      description:
        'Fetch detailed information about a Pokemon by name from PokeAPI. Returns stats, types, abilities, and sprite URL.',
      inputSchema: {
        pokemonName: z
          .string()
          .describe('The name of the Pokemon (e.g., pikachu, charizard, bulbasaur)')
      }
    },
    async ({ pokemonName }) => {
      try {
        const pokemon = await getPokemon(pokemonName);
        const summary = formatPokemonSummary(pokemon);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(summary, null, 2)
            }
          ]
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error instanceof Error ? error.message : 'Failed to fetch Pokemon'}`
            }
          ],
          isError: true
        };
      }
    }
  );

  /**
   * TOOL: Compare Pokemon
   * Compares stats of two Pokemon side-by-side
   */
  server.registerTool(
    'compare_pokemon',
    {
      title: 'Compare Two Pokemon',
      description:
        'Compare the base stats of two Pokemon to see which one is stronger in different categories.',
      inputSchema: {
        pokemon1: z.string().describe('Name of the first Pokemon'),
        pokemon2: z.string().describe('Name of the second Pokemon')
      }
    },
    async ({ pokemon1, pokemon2 }) => {
      try {
        const [p1, p2] = await Promise.all([getPokemon(pokemon1), getPokemon(pokemon2)]);

        const comparison = comparePokemonStats(p1, p2);

        const result = {
          pokemon1: {
            name: p1.name,
            types: p1.types.map(t => t.type.name)
          },
          pokemon2: {
            name: p2.name,
            types: p2.types.map(t => t.type.name)
          },
          statComparison: comparison
        };

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2)
            }
          ]
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error instanceof Error ? error.message : 'Failed to compare Pokemon'}`
            }
          ],
          isError: true
        };
      }
    }
  );

  /**
   * TOOL: Get Pokemon by Type
   * Searches for Pokemon of a specific type
   */
  server.registerTool(
    'get_pokemon_by_type',
    {
      title: 'Get Pokemon by Type',
      description:
        'Find all Pokemon of a specific type (e.g., fire, water, electric). Returns a list of Pokemon names.',
      inputSchema: {
        type: z.string().describe('Pokemon type (e.g., fire, water, grass, electric, psychic)')
      }
    },
    async ({ type }) => {
      try {
        const Pokedex = (await import('pokedex-promise-v2')).default;
        const P = new Pokedex();

        const typeData = await P.getTypeByName(type.toLowerCase());
        const pokemonList = typeData.pokemon.slice(0, 20).map(p => p.pokemon.name);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  type: type,
                  count: typeData.pokemon.length,
                  sample: pokemonList,
                  note: 'Showing first 20 Pokemon of this type'
                },
                null,
                2
              )
            }
          ]
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${
                error instanceof Error ? error.message : 'Failed to fetch Pokemon by type'
              }`
            }
          ],
          isError: true
        };
      }
    }
  );

  /**
   * TOOL: Get Evolution Chain
   * Fetches the evolution chain for a Pokemon
   */
  server.registerTool(
    'get_evolution_chain',
    {
      title: 'Get Evolution Chain',
      description:
        'Get the complete evolution chain for a Pokemon (e.g., Charmander → Charmeleon → Charizard).',
      inputSchema: {
        pokemonName: z.string().describe('Name of the Pokemon')
      }
    },
    async ({ pokemonName }) => {
      try {
        const Pokedex = (await import('pokedex-promise-v2')).default;
        const P = new Pokedex();

        const species = await P.getPokemonSpeciesByName(pokemonName.toLowerCase());
        const evolutionChainUrl = species.evolution_chain.url;
        const chainId = evolutionChainUrl.split('/').slice(-2, -1)[0];
        const evolutionChain = await P.getEvolutionChainById(parseInt(chainId));

        // Parse evolution chain
        const parseChain = (chain: any): string[] => {
          const result = [chain.species.name];
          if (chain.evolves_to.length > 0) {
            chain.evolves_to.forEach((evo: any) => {
              result.push(...parseChain(evo));
            });
          }
          return result;
        };

        const chain = parseChain(evolutionChain.chain);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  pokemon: pokemonName,
                  evolutionChain: chain
                },
                null,
                2
              )
            }
          ]
        };
      } catch (error: unknown) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${
                error instanceof Error ? error.message : 'Failed to fetch evolution chain'
              }`
            }
          ],
          isError: true
        };
      }
    }
  );

  console.log(
    '\x1b[36m  📦 Registered tools: get_pokemon, compare_pokemon, get_pokemon_by_type, get_evolution_chain\x1b[0m'
  );
};

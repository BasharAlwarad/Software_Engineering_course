/**
 * MCP RESOURCES (Application-Controlled Context)
 *
 * Resources provide contextual data that the application (or user) can inject into the conversation.
 * Unlike tools, resources are NOT automatically invoked by the model.
 * The MCP host decides when to include resource data.
 *
 * In VS Code Copilot:
 * - Click "Add Context" in chat
 * - Select "MCP Resources"
 * - Choose which resource to include
 */

import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';

/**
 * Register all Pokemon-related resources
 */
export const registerPokemonResources = (server: McpServer) => {
  /**
   * RESOURCE: Type Effectiveness Chart
   * Provides the complete Pokemon type effectiveness chart
   */
  server.registerResource(
    'type_chart',
    new ResourceTemplate('pokedex://type-chart', { list: undefined }),
    {
      title: 'Pokemon Type Effectiveness Chart',
      description: 'Complete type effectiveness chart showing strengths and weaknesses'
    },
    async uri => {
      try {
        const typeChart = {
          description: 'Pokemon Type Effectiveness Reference',
          superEffective: {
            fire: ['grass', 'ice', 'bug', 'steel'],
            water: ['fire', 'ground', 'rock'],
            grass: ['water', 'ground', 'rock'],
            electric: ['water', 'flying'],
            ice: ['grass', 'ground', 'flying', 'dragon'],
            fighting: ['normal', 'ice', 'rock', 'dark', 'steel'],
            poison: ['grass', 'fairy'],
            ground: ['fire', 'electric', 'poison', 'rock', 'steel'],
            flying: ['grass', 'fighting', 'bug'],
            psychic: ['fighting', 'poison'],
            bug: ['grass', 'psychic', 'dark'],
            rock: ['fire', 'ice', 'flying', 'bug'],
            ghost: ['psychic', 'ghost'],
            dragon: ['dragon'],
            dark: ['psychic', 'ghost'],
            steel: ['ice', 'rock', 'fairy'],
            fairy: ['fighting', 'dragon', 'dark']
          },
          notVeryEffective: {
            fire: ['fire', 'water', 'rock', 'dragon'],
            water: ['water', 'grass', 'dragon'],
            grass: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'],
            electric: ['electric', 'grass', 'dragon'],
            ice: ['fire', 'water', 'ice', 'steel'],
            fighting: ['poison', 'flying', 'psychic', 'bug', 'fairy'],
            poison: ['poison', 'ground', 'rock', 'ghost'],
            ground: ['grass', 'bug'],
            flying: ['electric', 'rock', 'steel'],
            psychic: ['psychic', 'steel'],
            bug: ['fire', 'fighting', 'poison', 'flying', 'ghost', 'steel', 'fairy'],
            rock: ['fighting', 'ground', 'steel'],
            ghost: ['dark'],
            dragon: ['steel'],
            dark: ['fighting', 'dark', 'fairy'],
            steel: ['fire', 'water', 'electric', 'steel'],
            fairy: ['fire', 'poison', 'steel']
          },
          noEffect: {
            normal: ['ghost'],
            fighting: ['ghost'],
            poison: ['steel'],
            ground: ['flying'],
            ghost: ['normal'],
            electric: ['ground'],
            psychic: ['dark'],
            dragon: ['fairy']
          }
        };

        return {
          contents: [
            {
              uri: uri.href,
              text: JSON.stringify(typeChart, null, 2)
            }
          ]
        };
      } catch (error: unknown) {
        return {
          contents: [
            {
              uri: uri.href,
              text: `Error: ${error instanceof Error ? error.message : 'Failed to load type chart'}`
            }
          ]
        };
      }
    }
  );

  /**
   * RESOURCE: Pokemon Generations
   * Information about all Pokemon generations
   */
  server.registerResource(
    'generations',
    new ResourceTemplate('pokedex://generations', { list: undefined }),
    {
      title: 'Pokemon Generations',
      description: 'Information about all Pokemon generations and their regions'
    },
    async uri => {
      try {
        const generations = {
          description: 'Pokemon Generations Reference',
          generations: [
            {
              id: 1,
              name: 'Generation I',
              region: 'Kanto',
              games: ['Red', 'Blue', 'Yellow'],
              pokemonCount: 151
            },
            {
              id: 2,
              name: 'Generation II',
              region: 'Johto',
              games: ['Gold', 'Silver', 'Crystal'],
              pokemonCount: 100
            },
            {
              id: 3,
              name: 'Generation III',
              region: 'Hoenn',
              games: ['Ruby', 'Sapphire', 'Emerald'],
              pokemonCount: 135
            },
            {
              id: 4,
              name: 'Generation IV',
              region: 'Sinnoh',
              games: ['Diamond', 'Pearl', 'Platinum'],
              pokemonCount: 107
            },
            {
              id: 5,
              name: 'Generation V',
              region: 'Unova',
              games: ['Black', 'White'],
              pokemonCount: 156
            },
            { id: 6, name: 'Generation VI', region: 'Kalos', games: ['X', 'Y'], pokemonCount: 72 },
            {
              id: 7,
              name: 'Generation VII',
              region: 'Alola',
              games: ['Sun', 'Moon'],
              pokemonCount: 88
            },
            {
              id: 8,
              name: 'Generation VIII',
              region: 'Galar',
              games: ['Sword', 'Shield'],
              pokemonCount: 96
            },
            {
              id: 9,
              name: 'Generation IX',
              region: 'Paldea',
              games: ['Scarlet', 'Violet'],
              pokemonCount: 120
            }
          ]
        };

        return {
          contents: [
            {
              uri: uri.href,
              text: JSON.stringify(generations, null, 2)
            }
          ]
        };
      } catch (error: unknown) {
        return {
          contents: [
            {
              uri: uri.href,
              text: `Error: ${
                error instanceof Error ? error.message : 'Failed to load generations'
              }`
            }
          ]
        };
      }
    }
  );

  /**
   * RESOURCE: PokeAPI Documentation
   * Link to official PokeAPI documentation
   */
  server.registerResource(
    'api_docs',
    new ResourceTemplate('pokedex://api-docs', { list: undefined }),
    {
      title: 'PokeAPI Documentation',
      description: 'Reference to the official PokeAPI documentation'
    },
    async uri => {
      const docs = {
        name: 'PokeAPI Documentation',
        description: 'The PokeAPI is a RESTful API for Pokemon data',
        baseUrl: 'https://pokeapi.co/api/v2/',
        documentation: 'https://pokeapi.co/docs/v2',
        endpoints: {
          pokemon: 'https://pokeapi.co/api/v2/pokemon/{id or name}',
          type: 'https://pokeapi.co/api/v2/type/{id or name}',
          ability: 'https://pokeapi.co/api/v2/ability/{id or name}',
          move: 'https://pokeapi.co/api/v2/move/{id or name}',
          generation: 'https://pokeapi.co/api/v2/generation/{id or name}'
        },
        note: 'All endpoints are rate-limited. Please cache responses when possible.'
      };

      return {
        contents: [
          {
            uri: uri.href,
            text: JSON.stringify(docs, null, 2)
          }
        ]
      };
    }
  );

  console.log('\x1b[36m  📚 Registered resources: type_chart, generations, api_docs\x1b[0m');
};

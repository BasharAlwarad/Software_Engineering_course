/**
 * UTILITY FUNCTIONS
 * Shared helper functions used across tools and resources
 */

import Pokedex, { type Pokemon } from 'pokedex-promise-v2';

// Initialize Pokedex API client
const P = new Pokedex();

/**
 * Pokemon name alias mapping (supports common non-English names)
 * Extend this map as needed for teaching purposes
 */
const POKEMON_ALIAS_MAP: Record<string, string> = {
  // German -> English
  bisasam: 'bulbasaur',
  glumanda: 'charmander',
  schiggy: 'squirtle',
  pikachu: 'pikachu',
  raupy: 'caterpie',
  hornliu: 'weedle',
  taubsi: 'pidgey',
  rattfratz: 'rattata',
  habitak: 'spearow',
  mauzi: 'meowth',
  enton: 'psyduck',
  machollo: 'machop',
  knofensa: 'bellsprout',
  tentacha: 'tentacool',
  georok: 'geodude'
};

/**
 * Fetch Pokemon data from PokeAPI
 * Handles name normalization and alias mapping
 *
 * @param pokemonName - Name of the Pokemon (English or supported alias)
 * @returns Pokemon object with full data
 * @throws Error if Pokemon not found
 */
export const getPokemon = async (pokemonName: string): Promise<Pokemon> => {
  console.log(`\x1b[36m🔍 Fetching Pokemon: ${pokemonName}\x1b[0m`);

  const normalized = pokemonName.trim().toLowerCase();
  const englishName = POKEMON_ALIAS_MAP[normalized] ?? normalized;

  try {
    const pokemon = await P.getPokemonByName(englishName);
    console.log(`\x1b[32m✅ Found Pokemon: ${pokemon.name}\x1b[0m`);
    return pokemon;
  } catch (err: any) {
    const detail = englishName !== normalized ? ` (interpreted as "${englishName}")` : '';
    const msg = `Could not find Pokémon "${pokemonName}"${detail}. Try the official English name.`;
    console.error(`\x1b[31m❌ ${msg}\x1b[0m`);
    throw new Error(msg);
  }
};

/**
 * Fetch Pokemon species data (includes evolution chain, habitat, etc.)
 *
 * @param pokemonName - Name of the Pokemon
 * @returns Pokemon species object
 */
export const getPokemonSpecies = async (pokemonName: string) => {
  console.log(`\x1b[36m🔍 Fetching species data for: ${pokemonName}\x1b[0m`);

  const normalized = pokemonName.trim().toLowerCase();
  const englishName = POKEMON_ALIAS_MAP[normalized] ?? normalized;

  try {
    const species = await P.getPokemonSpeciesByName(englishName);
    console.log(`\x1b[32m✅ Found species data\x1b[0m`);
    return species;
  } catch (err: any) {
    throw new Error(`Could not find species data for "${pokemonName}"`);
  }
};

/**
 * Fetch type information from PokeAPI
 *
 * @param typeName - Pokemon type (e.g., "fire", "water")
 * @returns Type object with damage relations
 */
export const getType = async (typeName: string) => {
  console.log(`\x1b[36m🔍 Fetching type: ${typeName}\x1b[0m`);

  try {
    const type = await P.getTypeByName(typeName.toLowerCase());
    console.log(`\x1b[32m✅ Found type data\x1b[0m`);
    return type;
  } catch (err: any) {
    throw new Error(`Could not find type "${typeName}"`);
  }
};

/**
 * Fetch generation information
 *
 * @param genId - Generation ID (1-9)
 * @returns Generation object with Pokemon list
 */
export const getGeneration = async (genId: number) => {
  console.log(`\x1b[36m🔍 Fetching generation: ${genId}\x1b[0m`);

  try {
    const generation = await P.getGenerationByName(genId);
    console.log(`\x1b[32m✅ Found generation data\x1b[0m`);
    return generation;
  } catch (err: any) {
    throw new Error(`Could not find generation ${genId}`);
  }
};

/**
 * Format Pokemon data for display
 * Extracts key information in a clean format
 *
 * @param pokemon - Pokemon object from PokeAPI
 * @returns Formatted Pokemon summary
 */
export const formatPokemonSummary = (pokemon: Pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types.map(t => t.type.name),
    abilities: pokemon.abilities.map(a => a.ability.name),
    stats: pokemon.stats.map(s => ({
      name: s.stat.name,
      value: s.base_stat
    })),
    sprite: pokemon.sprites.front_default
  };
};

/**
 * Compare two Pokemon stats
 *
 * @param pokemon1 - First Pokemon object
 * @param pokemon2 - Second Pokemon object
 * @returns Comparison object
 */
export const comparePokemonStats = (pokemon1: Pokemon, pokemon2: Pokemon) => {
  const stats1 = pokemon1.stats.reduce((acc, s) => {
    acc[s.stat.name] = s.base_stat;
    return acc;
  }, {} as Record<string, number>);

  const stats2 = pokemon2.stats.reduce((acc, s) => {
    acc[s.stat.name] = s.base_stat;
    return acc;
  }, {} as Record<string, number>);

  const comparison: Record<string, { pokemon1: number; pokemon2: number; winner: string }> = {};

  for (const stat in stats1) {
    comparison[stat] = {
      pokemon1: stats1[stat],
      pokemon2: stats2[stat],
      winner:
        stats1[stat] > stats2[stat]
          ? pokemon1.name
          : stats1[stat] < stats2[stat]
          ? pokemon2.name
          : 'tie'
    };
  }

  return comparison;
};

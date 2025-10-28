// Utility functions (simplified for students)
import type { ErrorResponseDTO } from '#types';
import Pokedex, { type Pokemon } from 'pokedex-promise-v2';

// Minimal alias map for common non-English (German) Pokémon names to English canonical names
// Extend as needed for teaching purposes
const POKEMON_ALIAS_MAP: Record<string, string> = {
  // German -> English
  bisasam: 'bulbasaur',
  glumanda: 'charmander',
  schiggy: 'squirtle',
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
  georok: 'graveler',
  juwelenkatze: 'persian' // playful example; safe to ignore if unknown
};

// Note: All streaming-related helpers removed to keep things simple.

/**
 * Tool calling function: Fetch Pokemon data from PokeAPI
 * Called by the AI model when it needs Pokemon information
 * @param pokemonName - Name of the Pokemon to fetch (e.g., "pikachu", "mew")
 * @returns Pokemon object with stats, types, abilities, etc.
 */
export const getPokemon = async ({ pokemonName }: { pokemonName: string }): Promise<Pokemon> => {
  console.log(`\x1b[35mFunction get_pokemon called with: ${pokemonName}\x1b[0m`);
  const P = new Pokedex();
  const normalized = pokemonName.trim().toLowerCase();
  const englishName = POKEMON_ALIAS_MAP[normalized] ?? normalized;
  try {
    return await P.getPokemonByName(englishName);
  } catch (err: any) {
    // Propagate a clearer error so the controller can return a structured response
    const detail = englishName !== normalized ? ` (interpreted as "${englishName}")` : '';
    const msg = `Could not find Pokémon "${pokemonName}"${detail}. Try the official English name.`;
    throw new Error(msg);
  }
};

/**
 * Tool calling function: Return error when question is not about Pokemon
 * Fallback function to handle off-topic queries gracefully
 * @param message - Error message explaining why the question cannot be answered
 * @returns ErrorResponseDTO object with success=false
 */
export const returnError = async ({ message }: { message: string }): Promise<ErrorResponseDTO> => {
  console.error(`\x1b[31mError: ${message}\x1b[0m`);
  return {
    success: false,
    error: message
  };
};

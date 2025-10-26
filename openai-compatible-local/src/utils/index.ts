// Utility functions for AI completions
import type { Response } from 'express';
import type { ChatCompletionCreateParamsNonStreaming } from 'openai/resources';
import type { ErrorResponseDTO } from '#types';
import OpenAI from 'openai';
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

/**
 * Handle both streaming and non-streaming AI responses
 * @param client - OpenAI client instance
 * @param res - Express response object
 * @param llmRequest - Chat completion parameters
 * @param stream - Whether to stream response (true) or return all at once (false)
 */
export const createOpenAICompletion = async (
  client: OpenAI,
  res: Response,
  llmRequest: ChatCompletionCreateParamsNonStreaming,
  stream: boolean
) => {
  if (stream) {
    // Streaming mode: Send tokens as they're generated (like ChatGPT typing effect)
    const completion = await client.chat.completions.create({
      ...llmRequest,
      stream
    });

    // Set headers for Server-Sent Events (SSE)
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Stream each token chunk to the client
    for await (const part of completion) {
      if (part.choices[0]?.delta?.content) {
        res.write(`data: ${part.choices[0].delta.content}\n\n`);
      }
    }
    res.end();
    return;
  } else {
    // Non-streaming mode: Wait for complete response, then send all at once
    const completion = await client.chat.completions.create(llmRequest);
    res
      .status(200)
      .json({ completion: completion.choices[0]?.message.content || 'No completion generated' });
  }
};

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

/**
 * TOOL CALLING CONTROLLER
 * Demonstrates multi-step AI interaction where the model decides when to call functions
 *
 * Flow:
 * 1. User sends a prompt (e.g., "Who is Pikachu?")
 * 2. Model checks intent and decides which tool to call
 * 3. We execute the requested function (getPokemon or returnError)
 * 4. Model receives function results and generates final structured response
 *
 * This pattern allows AI to dynamically fetch data it needs rather than us
 * hardcoding when to call APIs.
 */

import type { RequestHandler } from 'express';
import type { ChatCompletionMessageParam, ChatCompletionTool } from 'openai/resources';
import type { FinalResponseDTO, IncomingPrompt, ErrorResponseDTO } from '#types';
import type { Pokemon } from 'pokedex-promise-v2';
import { zodResponseFormat } from 'openai/helpers/zod';
import OpenAI from 'openai';
import { FinalResponse } from '#schemas';
import { getPokemon, returnError } from '#utils';

/**
 * TOOL DEFINITIONS
 * These describe the functions the AI model can call
 * The model uses these descriptions to decide when and how to use each tool
 */
const tools: ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      strict: true, // Enforce exact parameter schema
      name: 'get_pokemon',
      description:
        'Get details for a single Pokémon by name. Always pass the official English name as recognized by PokeAPI (e.g., "bulbasaur" not "Bisasam"). If the user uses a non-English name, translate or map it to the English canonical name before calling.',
      parameters: {
        type: 'object',
        description: 'The name of the Pokémon to get details for',
        properties: {
          pokemonName: {
            type: 'string',
            description:
              'Official English Pokémon name to get details for (e.g., bulbasaur, charmander, pikachu).',
            example: 'Pikachu'
          }
        },
        required: ['pokemonName'],
        additionalProperties: false
      }
    }
  },
  {
    type: 'function',
    function: {
      strict: true,
      name: 'return_error',
      description: 'Return an error when the user asks something that is NOT about Pokémon.',
      parameters: {
        type: 'object',
        description: 'The reason why the question is not about Pokémon',
        properties: {
          message: {
            type: 'string',
            description: 'The reason why the question is not about Pokémon',
            example: 'This question is not about Pokémon.'
          }
        },
        required: ['message'],
        additionalProperties: false
      }
    }
  }
];

/**
 * TOOL CALLING COMPLETION CONTROLLER
 * Implements the complete tool calling flow with Ollama
 */
export const createToolCallingCompletion: RequestHandler<
  unknown,
  FinalResponseDTO,
  IncomingPrompt
> = async (req, res) => {
  const { prompt } = req.body;

  // Initialize OpenAI client pointing to local Ollama server
  const client = new OpenAI({
    apiKey: process.env.OLLAMA_API_KEY || 'ollama', // Dummy key (required by SDK)
    baseURL: process.env.OLLAMA_URL // e.g., http://127.0.0.1:11434/v1
  });

  const model = process.env.OLLAMA_MODEL || 'llama3.1:8b'; // Model must support tool calling

  /**
   * STEP 1: BUILD INITIAL CONVERSATION
   * Start with system instructions + user prompt
   */
  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: `You determine if a question is about Pokémon.
       If the user asks about a Pokémon, you MUST call the get_pokemon function to fetch data about it.
       Always pass the official English Pokémon name to get_pokemon (e.g., bulbasaur instead of Bisasam).
       If the question is not about Pokémon, you MUST call the return_error function with a clear reason why the question is not about Pokémon.`
    },
    {
      role: 'user',
      content: prompt
    }
  ];

  /**
   * STEP 2: INTENT CHECK - Ask model which tool to use
   * The model will respond with a tool_call instead of a text message
   */
  console.log('\x1b[36m--- Step 1: Checking intent and requesting tool call ---\x1b[0m');
  const checkIntentCompletion = await client.chat.completions.create({
    model,
    tools, // Provide available tools
    tool_choice: 'required', // Force the model to call a function (workaround for local models)
    messages,
    temperature: 0 // Deterministic responses
  });

  // Extract the assistant's message (which contains tool_calls)
  const checkIntentCompletionMessage = checkIntentCompletion.choices[0]?.message;

  // Early return if no message received
  if (!checkIntentCompletionMessage) {
    res.status(500).json({
      success: false,
      error: 'Failed to generate a response from the model.'
    });
    return;
  }

  /**
   * STEP 3: ADD ASSISTANT MESSAGE TO CONVERSATION
   * This preserves the conversation history for the next completion
   */
  messages.push(checkIntentCompletionMessage);

  /**
   * STEP 4: EXECUTE TOOL CALLS
   * The model can request multiple tools, so we iterate through all tool_calls
   * This is the official OpenAI recommendation for handling function calls
   */
  console.log('\x1b[36m--- Step 2: Executing tool calls ---\x1b[0m');
  for (const toolCall of checkIntentCompletionMessage.tool_calls || []) {
    if (toolCall.type === 'function') {
      const name = toolCall.function.name;
      let args: any = {};
      try {
        args = JSON.parse(toolCall.function.arguments);
      } catch (e) {
        console.error(
          '\x1b[31mFailed to parse tool arguments:\x1b[0m',
          toolCall.function.arguments
        );
        const parseError: ErrorResponseDTO = {
          success: false,
          error: 'Invalid tool arguments generated by the model.'
        };
        messages.push({
          role: 'tool',
          tool_call_id: toolCall.id,
          content: JSON.stringify(parseError)
        });
        continue;
      }

      console.log(`\x1b[36mTool call detected: ${name} with args: ${JSON.stringify(args)}\x1b[0m`);

      // Execute the appropriate function based on the tool name
      let result: Pokemon | ErrorResponseDTO | string = '';

      try {
        if (name === 'get_pokemon') {
          result = await getPokemon({ pokemonName: args.pokemonName });
        }

        if (name === 'return_error') {
          result = await returnError({ message: args.message });
        }
      } catch (err: any) {
        const message = typeof err?.message === 'string' ? err.message : 'Tool execution failed.';
        result = { success: false, error: message } satisfies ErrorResponseDTO;
      }

      /**
       * STEP 5: ADD TOOL RESULT TO CONVERSATION
       * The 'tool' role message contains the function's output
       * The tool_call_id links this result to the original request
       */
      messages.push({
        role: 'tool',
        tool_call_id: toolCall.id,
        content: JSON.stringify(result) // Convert object to string for the model
      });
    }
  }

  // Debug: Show the enriched conversation
  console.log('\x1b[33m--- Enriched conversation messages: ---\x1b[0m');
  console.log(JSON.stringify(messages, null, 2));

  /**
   * STEP 6: GENERATE FINAL STRUCTURED RESPONSE
   * Now that the model has the tool results, ask it to format a final answer
   * Using zodResponseFormat ensures the output matches our FinalResponse schema
   */
  console.log('\x1b[36m--- Step 3: Generating final structured response ---\x1b[0m');
  const finalCompletion = await client.chat.completions.parse({
    model,
    messages,
    response_format: zodResponseFormat(FinalResponse, 'FinalResponse')
  });

  const finalResponse = finalCompletion.choices[0]?.message.parsed;

  // Early return if parsing failed
  if (!finalResponse) {
    res.status(500).json({
      completion: 'Failed to generate a final response.'
    });
    return;
  }

  // Success! Return the structured Pokemon data or error
  console.log('\x1b[32m--- Final response generated successfully ---\x1b[0m');
  res.json(finalResponse);
};

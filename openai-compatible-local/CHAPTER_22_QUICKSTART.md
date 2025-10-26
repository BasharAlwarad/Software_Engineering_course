# 🚀 Chapter 22: Tool Calling Quick Start Guide

## Prerequisites

Before starting, make sure you have completed the basic setup from the main README and have Ollama running.

## Step 1: Install Dependencies

If you haven't already, install the Pokemon API library:

```bash
npm install
```

This will install `pokedex-promise-v2` along with all other dependencies.

## Step 2: Pull a Tool-Calling Compatible Model

⚠️ **Important:** Not all models support tool calling well. Use `llama3.1:8b` for best results.

```bash
ollama pull llama3.1:8b
```

This is a ~4.7GB download. It may take a few minutes depending on your internet speed.

## Step 3: Update Environment Variables

Make sure your `.env.development.local` file includes:

```bash
NODE_ENV=development

# Ollama configuration
OLLAMA_URL=http://127.0.0.1:11434/v1
OLLAMA_API_KEY=ollama
OLLAMA_MODEL=llama3.1:8b
```

**Key change:** We're using `llama3.1:8b` instead of the lightweight `qwen2.5:0.5b` because tool calling requires a more capable model.

## Step 4: Start the Development Server

```bash
npm run dev
```

You should see:

```
Example app listening at http://localhost:3000
```

## Step 5: Test the Tool Calling Endpoint

### Test 1: Ask about a Pokemon

```bash
curl -X POST http://localhost:3000/ai/tool-calling \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Who is Pikachu?"}'
```

**Expected behavior:**

1. Console shows: `Function get_pokemon called with: pikachu` (in magenta)
2. Console shows: `Tool call detected: get_pokemon...` (in cyan)
3. Console shows: `Final response generated successfully` (in green)

**Expected response:**

```json
{
  "isPokemon": true,
  "pokemonInfo": {
    "id": 25,
    "name": "pikachu",
    "aboutSpecies": "Pikachu is an Electric-type Pokemon...",
    "types": ["electric"],
    "abilities": ["static", "lightning-rod"],
    "abilitiesExplained": "Static causes paralysis when hit by contact moves...",
    "frontSpriteURL": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  "error": null
}
```

### Test 2: Ask a non-Pokemon question

```bash
curl -X POST http://localhost:3000/ai/tool-calling \
  -H "Content-Type: application/json" \
  -d '{"prompt":"What is the capital of France?"}'
```

**Expected behavior:**

1. Console shows: `Error: This question is not about Pokémon...` (in red)
2. Console shows: `Tool call detected: return_error...` (in cyan)

**Expected response:**

```json
{
  "isPokemon": false,
  "pokemonInfo": null,
  "error": "This question is not about Pokémon. It asks about geography."
}
```

### Test 3: Try different Pokemon

```bash
# Charizard
curl -X POST http://localhost:3000/ai/tool-calling \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Tell me about Charizard"}'

# Mewtwo
curl -X POST http://localhost:3000/ai/tool-calling \
  -H "Content-Type: application/json" \
  -d '{"prompt":"What are Mewtwo abilities?"}'

# Eevee
curl -X POST http://localhost:3000/ai/tool-calling \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Describe Eevee"}'
```

## Understanding the Console Output

Watch the terminal while testing. You'll see color-coded logs showing the tool calling flow:

```
--- Step 1: Checking intent and requesting tool call --- (cyan)
Function get_pokemon called with: pikachu (magenta)
Tool call detected: get_pokemon with args: {"pokemonName":"pikachu"} (cyan)
--- Enriched conversation messages: --- (yellow)
[JSON of the full conversation]
--- Step 3: Generating final structured response --- (cyan)
--- Final response generated successfully --- (green)
```

These logs help you understand the multi-step process:

1. Intent check → Model decides which tool to call
2. Tool execution → Your function runs and fetches data
3. Final response → Model formats the answer with the data

## Troubleshooting

### "Model doesn't support tool calling"

**Solution:** Make sure you're using `llama3.1:8b`:

```bash
ollama list  # Check what you have
ollama pull llama3.1:8b  # Pull if missing
```

Update `.env.development.local` to use the correct model.

### Model returns text instead of calling functions

**Cause:** Some models ignore tools even when provided.

**Solution:** The code already includes `tool_choice: 'required'` which forces function calls. If this still happens, the model may not be compatible.

### "Failed to parse arguments" error

**Cause:** Model generated invalid JSON for function arguments.

**Solution:** This is rare with `llama3.1:8b`. If it happens:

1. Check if the model is running out of context
2. Try a simpler prompt
3. Restart Ollama

### Slow responses

**Cause:** `llama3.1:8b` is larger than `qwen2.5:0.5b`.

**Solutions:**

- Close other applications
- Use a quantized version: `ollama pull llama3.1:8b-q4_0` (smaller, faster)
- Be patient - tool calling requires 2 completions (takes longer)

## What's Different from Basic Completions?

| Feature               | Basic `/ai/ollama` | Tool Calling `/ai/tool-calling` |
| --------------------- | ------------------ | ------------------------------- |
| **Completions**       | 1 (just answer)    | 2 (intent check + final answer) |
| **External Data**     | No                 | Yes (Pokemon API)               |
| **Structured Output** | Plain text         | Zod-validated JSON              |
| **Functions**         | None               | 2 (get_pokemon, return_error)   |
| **Use Case**          | Simple Q&A         | Dynamic data fetching           |

## Next Steps

1. **Read the full Chapter 22 section** in the main README for detailed explanations
2. **Try modifying the tool definitions** to accept more parameters
3. **Add a new tool** (e.g., `compare_pokemon`)
4. **Experiment with different system messages** to see how it affects tool selection
5. **Check the code** in `src/controllers/toolCallingCompletion.ts` to understand the implementation

## Key Files to Study

- `src/controllers/toolCallingCompletion.ts` - Complete tool calling flow
- `src/utils/index.ts` - Tool implementations (getPokemon, returnError)
- `src/schemas/completionsSchemas.ts` - Zod schemas for structured output
- `src/types/index.ts` - TypeScript type definitions

## Testing with Postman

If you prefer a GUI:

1. **Method:** POST
2. **URL:** `http://localhost:3000/ai/tool-calling`
3. **Headers:**
   - `Content-Type: application/json`
4. **Body (raw JSON):**
   ```json
   {
     "prompt": "Who is Pikachu?"
   }
   ```

Click **Send** and watch both the Postman response and your terminal console!

---

**Happy Learning! 🎓**

Questions? Check the full Chapter 22 documentation in the main README or ask your instructor.

# 🎓 Gen AI Integration - Lecture Notes

## Overview

This project demonstrates how to integrate three major AI providers into a TypeScript/Node.js application:

- **OpenAI** (GPT models)
- **Anthropic** (Claude models)
- **Google** (Gemini models)

## 📂 Project Files

### Core Implementation Files

1. **`src/app.ts`** - Main orchestration script that runs all examples
2. **API Implementation Files:**
   - `openai-chat-rest.ts` - OpenAI using REST API (Chat Completions)
   - `openai-responses-rest.ts` - OpenAI using REST API (Responses API)
   - `openai-sdk-structured.ts` - OpenAI SDK with structured outputs
   - `anthropic-rest.ts` - Anthropic using REST API
   - `anthropic-sdk-structured.ts` - Anthropic SDK with JSON structure
   - `gemini-rest.ts` - Google Gemini using REST API
   - `gemini-sdk-structured.ts` - Google SDK with response schema

## 🎯 Learning Objectives

1. ✅ Understand the difference between REST APIs and SDKs
2. ✅ Know how to securely manage API keys using environment variables
3. ✅ Be able to make basic API calls to major AI providers
4. ✅ Understand structured outputs and why they matter
5. ✅ Compare and contrast different AI provider approaches

## 🚀 Quick Demo Commands

### For Students to Try:

```bash
# 1. Compare all OpenAI methods
npm run dev -- openai "What is TypeScript?"

# 2. Test Anthropic/Claude
npm run dev -- anthropic "Explain REST APIs in simple terms"

# 3. Test Google Gemini
npm run dev -- google "What is the difference between let and const?"

# 4. Same question to all providers (run separately)
npm run dev -- openai "Explain async/await in JavaScript"
npm run dev -- anthropic "Explain async/await in JavaScript"
npm run dev -- google "Explain async/await in JavaScript"
```

## 🔑 Key Concepts to Emphasize

### 1. REST API vs SDK

**REST API:**

- Pure HTTP requests using `fetch()`
- More control, language-agnostic
- Manual type handling
- Good for understanding fundamentals

**SDK:**

- Library-provided abstractions
- Type safety built-in
- Better developer experience
- Recommended for production

### 2. Structured Outputs

**Why they matter:**

- Predictable response format
- Easier to parse and use in applications
- Type safety in TypeScript
- Production-ready data

**Provider comparison:**

- **OpenAI**: Native support with Zod schemas (best)
- **Anthropic**: System prompts (requires validation)
- **Google**: Response schema config (good)

### 3. Security Best Practices

⚠️ **Never commit API keys!**

- Always use `.env` files
- Add `.env` to `.gitignore`
- Use `.env.example` for templates
- Rotate keys if exposed

### 4. Cost Management

💰 **Important for students:**

- Start with smaller models (cheaper)
- Set `max_tokens` limits

# 🎓 Gen AI Integration Lecture Notes

These notes accompany the code in `src/` and explain the key ideas you'll practice in class.

## 1) What are LLMs?

- Large Language Models (LLMs) are AI systems trained on huge text datasets to predict the next token (a chunk of text). By predicting tokens well, they can generate answers, summarize documents, write code, and follow instructions.
- Examples of LLM families: GPT (OpenAI), Claude (Anthropic), Gemini (Google). Each provider names and versions models differently (e.g., `gpt-4o-mini`, `claude-3-haiku-20240307`, `gemini-1.5-flash`).

## 2) Why integrate AI into applications?

- Automate tasks: drafting emails, summarizing text, generating code, creating documentation.
- Enhance user experience: natural-language search, chat support, content assistance.
- Data transformation: converting unstructured text into structured JSON your app can use.
- Rapid prototyping: quickly test product ideas with little custom ML.

Security and cost considerations:

- Keep API keys secret using `.env` files. Never commit them.
- Start with smaller/cheaper models where possible.
- Set output limits (see max_tokens) to control cost.
- Handle failures (timeouts, rate limits) with proper error handling.

## 3) Providers used in this project

- OpenAI (GPT): strong general capability, great structured-output SDK support.
- Anthropic (Claude): long context and safety focus; JSON formatting guided by prompts.
- Google (Gemini): multimodal by design; supports response schemas for structured outputs.

## 4) Core concepts and definitions

### REST API

- A standard way to call a service over HTTP using URLs, methods (GET/POST), headers, and JSON bodies.
- Pros: language-agnostic, full control, easy to see the raw request/response.
- Cons: more manual work (types, retries, parsing), each provider has unique shapes.

### SDK (Software Development Kit)

- An official client library from a provider that wraps the REST API to make it easier to use.
- Pros: nicer developer experience, built-in types, helpers (e.g., structured output parsing).
- Cons: adds a dependency, you follow the library’s design choices.

### Tokens

- The basic unit a model reads/writes (roughly sub-words). Longer inputs/outputs consume more tokens.
- Providers charge by tokens. Responses also report token usage.

### max_tokens (a.k.a. max_output_tokens)

- The maximum number of tokens the model is allowed to generate in its answer.
- Helps control cost and prevents overly long responses. Anthropic requires it on each request.

### temperature

- Controls randomness (0.0 to 1.0).
- Lower (e.g., 0–0.3): more deterministic and consistent (good for facts).
- Higher (e.g., 0.7–1.0): more creative and varied (good for brainstorming).

## 5) How this repository is organized

Key files in `src/`:

- `app.ts`: CLI that runs examples for the chosen provider and prints results.
- `openai-chat-rest.ts`: OpenAI chat completions over REST.
- `openai-responses-rest.ts`: OpenAI Responses API over REST (newer, tool/structured friendly).
- `openai-sdk-structured.ts`: OpenAI SDK with Zod schema parsing for structured outputs.
- `anthropic-rest.ts`: Anthropic Claude Messages API over REST.
- `anthropic-sdk-structured.ts`: Anthropic SDK with prompted JSON-shaped output.
- `gemini-rest.ts`: Google Gemini REST example.
- `gemini-sdk-structured.ts`: Google SDK with response schema enforcing JSON.

## 6) Running the demos

1. Ensure you have at least one API key and a `.env` file (based on `.env.example`).
2. From the project folder `wbs-node-ts-template/` run:

```bash
npm run dev -- openai "What is TypeScript?"
npm run dev -- anthropic "Explain REST APIs in simple terms"
npm run dev -- google "What is the difference between let and const?"
```

Compare the output shapes across providers and across REST vs SDK.

## 7) Deep-dive topics covered in the lecture

### A) REST APIs in practice

- Construct the URL, headers (Authorization with your API key), and JSON body.
- Send with `fetch()` and parse the JSON response.
- Inspect the result: text content, usage (tokens), any error fields.

### B) SDKs and structured outputs

- Use the provider’s SDK methods instead of manual fetch.
- For OpenAI, define a Zod schema and let the SDK parse/validate the model output.
- For Gemini, specify a `responseSchema` so the model aims to return valid JSON.
- For Anthropic, use system prompts to request JSON (less strict—still validate).

### C) Parameters you should recognize

- `model`: selects capability/price tier (smaller = cheaper/faster; larger = stronger).
- `temperature`: randomness/creativity dial.
- `max_tokens` (or `max_output_tokens`): caps output length/cost.
- `system` prompt: sets role/instructions to guide behavior.

### D) Cost and safety basics

- Monitor usage on provider dashboards.
- Rotate keys if exposed. Don’t log secrets.
- Avoid sending sensitive data to third-party APIs unless policy-approved.

---

## 8) Suggested Lecture Flow (implemented content)

1. Introduction

   - Define LLMs and show everyday examples (chatbots, code assistants, summarizers).
   - Why integrate AI: better UX, automation, faster prototyping, structured data generation.

2. Setup walk-through

   - Getting API keys (OpenAI, Anthropic, Gemini) and `.env` configuration.
   - Quick sanity run using `npm run dev -- <provider> "<prompt>"`.

3. REST fundamentals with one provider

   - Open `openai-chat-rest.ts` and explain: endpoint, headers, body, messages array, response.
   - Discuss key params: `model`, `temperature`, `max_tokens`, `system`.

4. Move to SDKs and structured output

   - Open `openai-sdk-structured.ts` to show Zod schema validation.
   - Contrast with `anthropic-sdk-structured.ts` (prompted JSON) and `gemini-sdk-structured.ts` (responseSchema).

5. Provider comparison and tradeoffs

   - Capability vs price, strictness of structured outputs, multimodality.
   - Show where token usage appears in responses.

6. Wrap-up
   - When to choose REST vs SDK.
   - Practical defaults: small models, low temperature, sensible `max_tokens`.
   - Encourage reading official docs and trying more prompts/models.

---

## 9) Helpful links

- OpenAI: https://platform.openai.com/docs
- Anthropic: https://docs.anthropic.com
- Google AI Studio: https://ai.google.dev
- Zod: https://zod.dev

---

Happy learning! 🎓

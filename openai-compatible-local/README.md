> **Teaching Material**: educational content: using LLM and AI locally in the machine created by Bashar Alwarad.

---

# 🎓 Local AI Integration with Ollama - Complete Lecture Guide

---

## Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Bashar%20AlWarad-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bashar-alwarad-2a960b1b6/)

## 📖 Overview

This project demonstrates how to integrate a **local AI model** (Ollama) into a TypeScript/Express.js REST API. Instead of relying on expensive cloud APIs like OpenAI, Anthropic, or Google, you'll learn to run AI models **completely offline on your own machine** for free.

**What you'll build:**

- A REST API server with Express.js
- AI completion endpoints using OpenAI-compatible SDK
- Request validation with Zod schemas
- Support for both streaming and non-streaming responses
- Proper error handling and middleware architecture

**Real-world use cases:**

- Privacy-focused AI applications (data never leaves your machine)
- Prototyping and development without API costs
- Teaching and experimentation with various models
- Offline AI capabilities for edge deployments

---

## 🎯 Learning Objectives

By the end of this lecture, you will:

1. ✅ Understand what Large Language Models (LLMs) are and why they're useful
2. ✅ Know how to install and run Ollama locally
3. ✅ Build a REST API that integrates with local AI models
4. ✅ Use the OpenAI SDK with OpenAI-compatible endpoints
5. ✅ Implement proper request validation and error handling
6. ✅ Understand environment-based configuration (dev vs production)
7. ✅ Handle both streaming and non-streaming AI responses
8. ✅ Troubleshoot common connection and configuration issues

---

## 📂 Project Structure

```
openai-compatible-local/
├── src/
│   ├── app.ts                      # Main Express server setup
│   ├── controllers/
│   │   ├── completions.ts          # AI completion handlers
│   │   └── index.ts                # Controller exports
│   ├── routes/
│   │   ├── completionsRouter.ts    # API route definitions
│   │   └── index.ts                # Route exports
│   ├── middlewares/
│   │   ├── errorHandler.ts         # Global error handler
│   │   ├── validateBodyZod.ts      # Request validation
│   │   ├── notFoundHandler.ts      # 404 handler
│   │   └── index.ts                # Middleware exports
│   ├── schemas/
│   │   ├── completionsSchemas.ts   # Zod validation schemas
│   │   └── index.ts                # Schema exports
│   └── utils/
│       └── index.ts                # Shared utilities (streaming)
├── .env.development.local          # Local environment variables
├── .gitignore                      # Git ignore rules
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

---

## 🔑 Key Concepts

### 1. What are Large Language Models (LLMs)?

**LLMs** are AI systems trained on massive amounts of text data to understand and generate human-like text. They work by predicting the next "token" (word or sub-word piece) based on the input context.

**Popular LLM families:**

- **GPT** (OpenAI): ChatGPT, GPT-4
- **Llama** (Meta): Open-source, runs locally
- **Qwen** (Alibaba): Lightweight, multilingual
- **Gemma** (Google): Small, efficient models

### 2. Why Run AI Locally with Ollama?

**Ollama** is a tool that makes running LLMs on your local machine as easy as running Docker containers.

**Benefits:**

- 🔒 **Privacy**: Your data never leaves your machine
- 💰 **Cost**: Completely free, no API charges
- ⚡ **Speed**: No network latency for local inference
- 📚 **Learning**: Experiment without worrying about API costs
- 🌐 **Offline**: Works without internet connection

### 3. OpenAI-Compatible APIs

Ollama exposes an **OpenAI-compatible API**, meaning:

- You can use the official `openai` npm package
- Just point it to `http://localhost:11434/v1` instead of OpenAI's servers
- Your code works with both local (Ollama) and cloud (OpenAI) models
- Easy to switch between providers by changing environment variables

### 4. Key API Concepts

#### Messages Array

AI models receive conversation history as an array of messages:

```typescript
messages: [
  { role: 'developer', content: 'You are a helpful assistant' }, // System instruction
  { role: 'user', content: 'What is TypeScript?' } // User's question
];
```

#### Streaming vs Non-Streaming

- **Non-streaming**: Wait for the complete response, then return it all at once
- **Streaming**: Send response chunks as they're generated (like ChatGPT's typing effect)

#### Environment Variables

Configuration that changes between development and production:

```bash
NODE_ENV=development              # Tells the app which mode it's in
OLLAMA_URL=http://127.0.0.1:11434/v1   # Local Ollama endpoint
OLLAMA_API_KEY=ollama             # Dummy key (required by SDK)
OLLAMA_MODEL=qwen2.5:0.5b         # Which model to use
```

---

## 🚀 Getting Started - Step by Step

### Step 1: Prerequisites

Make sure you have installed:

- **Node.js** (v20 or higher): [Download here](https://nodejs.org/)
- **Git**: For version control
- **VS Code**: Recommended editor

Verify installations:

```bash
node --version    # Should show v20.x.x or higher
npm --version     # Should show 10.x.x or higher
```

---

### Step 2: Install and Configure Ollama

#### 2.1 Download Ollama

1. Go to: [https://ollama.com/download](https://ollama.com/download)
2. Download the Windows installer
3. Run the installer (it will add Ollama to your PATH)
4. **Important**: After installation, open a **new terminal** for the PATH to update

#### 2.2 Verify Installation

Open a **new bash terminal** (or PowerShell) and run:

```bash
ollama --version
```

You should see output like: `ollama version is 0.x.x`

**Troubleshooting:**

- If "command not found", restart your terminal or reboot your computer
- The integrated VS Code terminal might need a restart
- Try PowerShell if Git Bash doesn't recognize the command

#### 2.3 Start Ollama Server

Ollama runs as a background service. Two ways to start it:

**Option 1: Launch the Ollama app** (easiest)

- Find "Ollama" in your Start menu and open it
- It will run in the system tray

**Option 2: Run in terminal**

```bash
ollama serve
```

#### 2.4 Pull a Lightweight Model

For teaching and experimentation, we'll use a small, fast model:

```bash
ollama pull qwen2.5:0.5b
```

**Why this model?**

- Only ~395 MB (downloads in seconds)
- Fast responses on any hardware
- Good quality for demos and learning
- Perfect for experimentation

**Alternative lightweight models:**

```bash
ollama pull llama3.2:1b        # ~1.3 GB - Meta's small model
ollama pull gemma2:2b          # ~1.6 GB - Google's lightweight model
ollama pull phi3.5:mini        # ~2.2 GB - Microsoft's capable small model
```

#### 2.5 Verify the Model

```bash
ollama list
```

You should see `qwen2.5:0.5b` in the list.

#### 2.6 Test Ollama (Optional)

Quick sanity check:

```bash
ollama run qwen2.5:0.5b
```

Type a question like "What is Python?" and press Enter. The model should respond. Type `/bye` to exit.

#### 2.7 Verify API Endpoints

Check that Ollama's OpenAI-compatible API is reachable:

```bash
curl http://127.0.0.1:11434/api/tags
```

You should see JSON with your installed models.

---

### Step 3: Project Setup

#### 3.1 Create Project Directory

```bash
mkdir openai-compatible-local
cd openai-compatible-local
```

#### 3.2 Initialize Node.js Project

```bash
npm init -y
```

This creates a `package.json` file.

#### 3.3 Install Dependencies

```bash
npm install express openai zod mongoose
npm install --save-dev typescript @types/node @types/express
```

**What each package does:**

- `express`: Web framework for building REST APIs
- `openai`: Official OpenAI SDK (works with Ollama too!)
- `zod`: TypeScript-first schema validation
- `mongoose`: MongoDB integration (for future extensions)
- `typescript`: TypeScript compiler
- `@types/*`: Type definitions for TypeScript

#### 3.4 Configure package.json

Update your `package.json` with proper scripts and imports:

```json
{
  "name": "openai-compatible-local",
  "version": "1.0.0",
  "main": "app.ts",
  "type": "module",
  "imports": {
    "#controllers": {
      "development": "./src/controllers/index.ts",
      "default": "./dist/controllers/index.js"
    },
    "#middlewares": {
      "development": "./src/middlewares/index.ts",
      "default": "./dist/middlewares/index.js"
    },
    "#routes": {
      "development": "./src/routes/index.ts",
      "default": "./dist/routes/index.js"
    },
    "#schemas": {
      "development": "./src/schemas/index.ts",
      "default": "./dist/schemas/index.js"
    },
    "#utils": {
      "development": "./src/utils/index.ts",
      "default": "./dist/utils/index.js"
    }
  },
  "scripts": {
    "dev": "node --watch --conditions development --experimental-transform-types --disable-warning=ExperimentalWarning --env-file=.env.development.local src/app.ts",
    "prebuild": "rm -rf dist",
    "build": "tsc",
    "prestart": "npm run build",
    "start": "node --env-file=.env.production.local dist/app.js"
  },
  "dependencies": {
    "express": "^5.1.0",
    "mongoose": "^8.16.5",
    "openai": "^5.12.2",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@types/express": "^5.0.3",
    "@types/node": "^24.1.0",
    "typescript": "^5.8.3"
  }
}
```

**Key features:**

- `"type": "module"`: Use ES modules (import/export)
- `imports`: Path aliases for cleaner imports (`#controllers` instead of `../../controllers`)
- `dev` script: Auto-restart on file changes with `--watch`
- `--env-file`: Loads environment variables automatically

#### 3.5 Configure TypeScript

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    /* Base Options: */
    "esModuleInterop": true,
    "lib": ["es2022"],
    "target": "es2022",
    "skipLibCheck": true,
    "allowJs": true,
    "resolveJsonModule": true,
    "moduleDetection": "force",
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    /* Strictness */
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    /* Node Stuff */
    "allowImportingTsExtensions": true,
    "rewriteRelativeImportExtensions": true,
    "module": "preserve",
    "noEmit": false,
    "outDir": "dist",
    "rootDir": "./src",
    /* Paths */
    "baseUrl": "./src",
    "paths": {
      "#*": ["*"]
    }
  },
  "include": ["src"]
}
```

**Important settings:**

- `strict: true`: Maximum type safety
- `paths`: Maps `#controllers` to actual file paths
- `outDir: "dist"`: Compiled JavaScript goes here

#### 3.6 Create .gitignore

Create `.gitignore` to prevent committing sensitive files:

```ignore
node_modules
.env*
dist/
```

⚠️ **Critical**: Never commit `.env` files—they contain secrets!

#### 3.7 Setup Environment Variables

Create `.env.development.local`:

```bash
NODE_ENV=development

# OpenAI-compatible (Ollama) local setup
OLLAMA_URL=http://127.0.0.1:11434/v1
# The OpenAI SDK requires a non-empty apiKey even for local servers; a dummy value is fine
OLLAMA_API_KEY=ollama
# Lightweight model for teaching and experimentation
OLLAMA_MODEL=qwen2.5:0.5b

# Optional: cloud OpenAI config for production runs
# OPENAI_API_KEY=
# OPENAI_MODEL=gpt-4o-mini
```

**Why these values?**

- `NODE_ENV=development`: Tells code to use Ollama (local)
- `OLLAMA_URL`: Ollama's OpenAI-compatible endpoint
- `OLLAMA_API_KEY=ollama`: SDK requires a key; any non-empty string works locally
- `127.0.0.1` vs `localhost`: More reliable on Windows

---

### Step 4: Build the Application

#### 4.1 Create Directory Structure

```bash
mkdir -p src/controllers src/routes src/middlewares src/schemas src/utils
```

#### 4.2 Define Validation Schema

Create `src/schemas/completionsSchemas.ts`:

```typescript
import { z } from 'zod';

export const promptBodySchema = z.object({
  prompt: z
    .string()
    .min(1, 'Prompt cannot be empty')
    .max(1000, 'Prompt cannot exceed 1000 characters'),
  stream: z.boolean().optional().default(false)
});
```

**What this does:**

- Validates incoming requests have a `prompt` string (1-1000 chars)
- Optional `stream` boolean (defaults to `false`)
- Zod provides automatic type inference for TypeScript

Create `src/schemas/index.ts`:

```typescript
export * from './completionsSchemas.ts';
```

#### 4.3 Create Utility for Streaming

Create `src/utils/index.ts`:

```typescript
import type { Response } from 'express';
import type { ChatCompletionCreateParamsNonStreaming } from 'openai/resources';
import OpenAI from 'openai';

export const createOpenAICompletion = async (
  client: OpenAI,
  res: Response,
  llmRequest: ChatCompletionCreateParamsNonStreaming,
  stream: boolean
) => {
  if (stream) {
    const completion = await client.chat.completions.create({
      ...llmRequest,
      stream
    });
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    for await (const part of completion) {
      if (part.choices[0]?.delta?.content) {
        res.write(`data: ${part.choices[0].delta.content}\n\n`);
      }
    }
    res.end();
    return;
  } else {
    const completion = await client.chat.completions.create(llmRequest);
    res
      .status(200)
      .json({ completion: completion.choices[0]?.message.content || 'No completion generated' });
  }
};
```

**Key concepts:**

- **Non-streaming**: Wait for full response, return JSON
- **Streaming**: Send Server-Sent Events (SSE) as tokens arrive
- Real-time "typing" effect like ChatGPT

#### 4.4 Create Controllers

Create `src/controllers/completions.ts`:

```typescript
import type { RequestHandler } from 'express';
import type { ChatCompletionCreateParamsNonStreaming } from 'openai/resources';
import type { z } from 'zod';
import { createOpenAICompletion } from '#utils';
import type { promptBodySchema } from '#schemas';
import OpenAI from 'openai';

type IncomingPrompt = z.infer<typeof promptBodySchema>;
type ResponseCompletion = { completion: string };

export const createOllamaCompletion: RequestHandler<
  unknown,
  ResponseCompletion,
  IncomingPrompt
> = async (req, res) => {
  const { prompt } = req.body;
  const client = new OpenAI({
    apiKey:
      process.env.NODE_ENV === 'development'
        ? process.env.OLLAMA_API_KEY
        : process.env.OPENAI_API_KEY,
    baseURL: process.env.NODE_ENV === 'development' ? process.env.OLLAMA_URL : undefined
  });
  const completion = await client.chat.completions.create({
    model:
      process.env.NODE_ENV === 'development'
        ? process.env.OLLAMA_MODEL!
        : process.env.OPENAI_MODEL!,
    messages: [
      { role: 'developer', content: 'You are a helpful assisstant' },
      { role: 'user', content: prompt }
    ]
  });
  res
    .status(200)
    .json({ completion: completion.choices[0]?.message.content || 'No completion generated' });
};

export const createLMSCompletion: RequestHandler<
  unknown,
  ResponseCompletion,
  IncomingPrompt
> = async (req, res) => {
  const { prompt, stream } = req.body;
  // Create OpenAI client with LMS settings
  const client = new OpenAI({
    apiKey:
      process.env.NODE_ENV === 'development' ? process.env.LMS_API_KEY : process.env.OPENAI_API_KEY,
    baseURL: process.env.NODE_ENV === 'development' ? process.env.LMS_URL : undefined
  });
  // Prepare the base request for LMS
  const baseRequest: ChatCompletionCreateParamsNonStreaming = {
    model:
      process.env.NODE_ENV === 'development' ? process.env.LMS_MODEL! : process.env.OPENAI_MODEL!,
    messages: [
      { role: 'developer', content: 'You are a helpful assisstant' },
      { role: 'user', content: prompt }
    ]
  };
  // Utility function takes care of streaming or non-streaming completions
  await createOpenAICompletion(client, res, baseRequest, stream);
};
```

**Architecture highlights:**

- Environment-aware: Uses Ollama in dev, OpenAI in production
- Type-safe: TypeScript catches errors at compile time
- Reusable: Same pattern works for any OpenAI-compatible provider

Create `src/controllers/index.ts`:

```typescript
export * from './completions.ts';
```

#### 4.5 Create Middlewares

Create `src/middlewares/validateBodyZod.ts`:

```typescript
import type { RequestHandler } from 'express';
import type { ZodSchema } from 'zod';

const validateBodyZod =
  <T>(zodSchema: ZodSchema<T>): RequestHandler =>
  (req, res, next) => {
    const result = zodSchema.safeParse(req.body);
    if (!result.success) {
      const errorMessage = result.error.issues
        .map(issue => `${issue.path.join('.')}: ${issue.message}`)
        .join('; ');

      next(
        new Error(`Validation failed: ${errorMessage}`, {
          cause: {
            status: 400
          }
        })
      );
    } else {
      req.body = result.data;
      next();
    }
  };

export default validateBodyZod;
```

**What it does:**

- Validates request body against Zod schema
- Returns 400 with helpful error messages if invalid
- Passes validated data to the next handler

Create `src/middlewares/errorHandler.ts`:

```typescript
import type { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  process.env.NODE_ENV !== 'production' && console.error(`\x1b[31m${err.stack || err}\x1b[0m`);

  // Normalize status code from various error shapes; default to 500
  const statusFromCause =
    typeof (err as any)?.cause?.status === 'number' ? (err as any).cause.status : undefined;
  const status =
    typeof (err as any)?.status === 'number'
      ? (err as any).status
      : typeof (err as any)?.statusCode === 'number'
      ? (err as any).statusCode
      : statusFromCause ?? 500;

  if (err instanceof Error) {
    const payload: Record<string, unknown> = { message: err.message };
    if (process.env.NODE_ENV !== 'production') {
      payload.stack = err.stack;
      if (statusFromCause && statusFromCause >= 400 && statusFromCause < 600) {
        payload.cause = (err as any).cause;
      }
    }
    res.status(status).json(payload);
    return;
  }
  res.status(status).json({ message: 'Internal server error' });
  return;
};

export default errorHandler;
```

**Features:**

- Catches all errors thrown in the app
- Always sends valid HTTP status code (defaults to 500)
- Shows stack traces in development (not production)
- Handles connection errors gracefully

Create `src/middlewares/notFoundHandler.ts`:

```typescript
import type { RequestHandler } from 'express';

const notFoundHandler: RequestHandler = (req, res, next) => {
  next(new Error('Not Found', { cause: { status: 404 } }));
};

export default notFoundHandler;
```

Create `src/middlewares/index.ts`:

```typescript
export { default as errorHandler } from './errorHandler.ts';
export { default as notFoundHandler } from './notFoundHandler.ts';
export { default as validateBodyZod } from './validateBodyZod.ts';
```

#### 4.6 Create Routes

Create `src/routes/completionsRouter.ts`:

```typescript
import { Router } from 'express';
import { createLMSCompletion, createOllamaCompletion } from '#controllers';
import { validateBodyZod } from '#middlewares';
import { promptBodySchema } from '#schemas';

const completionsRouter = Router();

// Apply body validation only to endpoints that require a prompt body
completionsRouter.post('/ollama', validateBodyZod(promptBodySchema), createOllamaCompletion);
completionsRouter.post('/lms', validateBodyZod(promptBodySchema), createLMSCompletion);

export default completionsRouter;
```

**Route design:**

- `POST /ai/ollama`: Send prompts to local Ollama
- `POST /ai/lms`: Alternative endpoint for LM Studio or other providers
- Validation middleware runs before controller

Create `src/routes/index.ts`:

```typescript
export { default as completionsRouter } from './completionsRouter.ts';
```

#### 4.7 Create Main Application

Create `src/app.ts`:

```typescript
import express from 'express';
import { completionsRouter } from '#routes';
import { errorHandler, notFoundHandler } from '#middlewares';

const app = express();
const port = process.env.PORT || '3000';

app.use(express.json());
app.use('/ai', completionsRouter);
app.use('*splat', notFoundHandler);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`\x1b[35mExample app listening at http://localhost:${port}\x1b[0m`)
);
```

**Application flow:**

1. Parse incoming JSON bodies
2. Route `/ai/*` requests to completions router
3. Catch 404s for unknown routes
4. Global error handler catches all errors

---

### Step 5: Run and Test

#### 5.1 Start the Development Server

```bash
npm run dev
```

You should see:

```
Example app listening at http://localhost:3000
```

The server auto-restarts when you edit files (thanks to `--watch`).

#### 5.2 Test the API

**Using curl (bash terminal):**

```bash
curl -X POST http://localhost:3000/ai/ollama \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Explain what TypeScript is in one sentence.","stream":false}'
```

**Expected response:**

```json
{
  "completion": "TypeScript is a superset of JavaScript that adds static typing and other features to help developers write more maintainable and scalable code."
}
```

**Using Postman:**

1. Method: `POST`
2. URL: `http://localhost:3000/ai/ollama`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):

```json
{
  "prompt": "What is Node.js?",
  "stream": false
}
```

#### 5.3 Test Streaming

```bash
curl -X POST http://localhost:3000/ai/ollama \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Count from 1 to 10.","stream":true}'
```

You'll see tokens arrive in real-time!

---

## 🔍 Deep Dive: How It Works

### The Request Flow

1. **Client** sends POST to `/ai/ollama` with JSON body
2. **Express** parses JSON via `express.json()` middleware
3. **Router** matches `/ai/ollama` and runs validation middleware
4. **Validation** checks body against Zod schema; rejects if invalid
5. **Controller** extracts `prompt`, creates OpenAI client
6. **OpenAI SDK** sends request to `http://127.0.0.1:11434/v1/chat/completions`
7. **Ollama** runs the model locally and returns completion
8. **Controller** formats response and sends JSON back to client

### Environment-Based Configuration

```typescript
const client = new OpenAI({
  apiKey:
    process.env.NODE_ENV === 'development'
      ? process.env.OLLAMA_API_KEY // Local: dummy key
      : process.env.OPENAI_API_KEY, // Production: real API key
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.OLLAMA_URL // Local: http://127.0.0.1:11434/v1
      : undefined // Production: default OpenAI URL
});
```

**Why this matters:**

- Same code works for local (free) and cloud (paid) AI
- Switch environments by changing `NODE_ENV`
- No code changes needed to deploy to production

### Why a Dummy API Key?

Even though Ollama is local and doesn't check authentication, the OpenAI SDK **requires** a non-empty `apiKey` parameter. Using `"ollama"` or any string satisfies this requirement.

---

## 🐛 Common Issues and Solutions

### Issue 1: "Connection error" when calling /ai/ollama

**Cause:** Ollama isn't running or isn't reachable.

**Solution:**

1. Check if Ollama is running:
   ```bash
   curl http://127.0.0.1:11434/api/tags
   ```
2. If it fails, start Ollama app or run `ollama serve`
3. Ensure port 11434 isn't blocked by firewall
4. Try `127.0.0.1` instead of `localhost` in `.env.development.local`

### Issue 2: "Model not found" error

**Cause:** The model specified in `OLLAMA_MODEL` isn't pulled.

**Solution:**

```bash
ollama list                        # See what you have
ollama pull qwen2.5:0.5b          # Pull the missing model
```

Update `.env.development.local` to match a model you have.

### Issue 3: "OPENAI_API_KEY environment variable is missing"

**Cause:** `NODE_ENV` isn't set to `"development"`, so code tries to use OpenAI instead of Ollama.

**Solution:**

- Ensure `.env.development.local` has `NODE_ENV=development`
- Restart the dev server after editing `.env` files
- The `--env-file` flag in `npm run dev` loads the file automatically

### Issue 4: "ollama: command not found"

**Cause:** PATH not updated or wrong terminal.

**Solution:**

- Restart your terminal after installing Ollama
- Try PowerShell instead of Git Bash
- Reboot your computer if PATH still not updating
- Check installation: look for Ollama in `C:\Users\<user>\AppData\Local\Programs\Ollama\`

### Issue 5: Responses are slow

**Cause:** Model is too large for your hardware, or CPU inference is slow.

**Solution:**

- Use a smaller model: `qwen2.5:0.5b` (395 MB)
- Close other heavy applications
- Consider models with quantization (Q4, Q5 variants)

### Issue 6: TypeScript errors when running

**Cause:** Missing types or wrong TypeScript config.

**Solution:**

```bash
npm install                        # Reinstall dependencies
npm run build                      # Check for compile errors
```

---

## 📊 Comparing Local vs Cloud AI

| Feature           | Local (Ollama)                 | Cloud (OpenAI)                    |
| ----------------- | ------------------------------ | --------------------------------- |
| **Cost**          | Free                           | Pay per token (~$0.002/1K tokens) |
| **Privacy**       | Data stays on your machine     | Data sent to third party          |
| **Speed**         | Depends on your hardware       | Fast (cloud GPUs)                 |
| **Setup**         | Install Ollama, pull models    | Just get API key                  |
| **Internet**      | Works offline                  | Requires connection               |
| **Model Quality** | Good (varies by model)         | Excellent (GPT-4)                 |
| **Best For**      | Learning, prototyping, privacy | Production, best quality          |

---

## 🔗 Helpful Resources

- **Ollama**: [https://ollama.com/](https://ollama.com/)
- **Ollama Models**: [https://ollama.com/library](https://ollama.com/library)
- **OpenAI SDK**: [https://github.com/openai/openai-node](https://github.com/openai/openai-node)
- **Express.js**: [https://expressjs.com/](https://expressjs.com/)
- **Zod**: [https://zod.dev/](https://zod.dev/)
- **TypeScript**: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## 💡 Key Takeaways

1. ✅ **Local AI is practical**: Ollama makes running LLMs as easy as Docker
2. ✅ **OpenAI SDK is flexible**: Works with any OpenAI-compatible API
3. ✅ **Environment variables**: Key to switching between dev/prod
4. ✅ **Type safety matters**: Zod + TypeScript catch errors early
5. ✅ **Middleware architecture**: Clean separation of concerns
6. ✅ **Streaming is powerful**: Better UX for long responses
7. ✅ **Privacy first**: Local AI keeps data on your machine
8. ✅ **Cost-effective learning**: Experiment for free

---

## 📝 Notes on Production

If deploying this to production:

1. **Use cloud AI** for better quality (update `NODE_ENV` and add real API keys)
2. **Add rate limiting** to prevent abuse
3. **Implement authentication** (JWT, API keys, etc.)
4. **Add logging** (Winston, Pino)
5. **Use a process manager** (PM2, Docker)
6. **Set up monitoring** (track token usage, errors)
7. **Handle retries** for transient failures
8. **Add request timeouts** to prevent hanging

---

**Happy Learning! 🎓🚀**

_Questions? Issues? Ask your instructor or check the troubleshooting section above._

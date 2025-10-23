# 🤖 AI Providers Integration - Node + TypeScript

A hands-on introduction to integrating AI providers (OpenAI, Anthropic, Google) using TypeScript and Node.js.

## 📚 What You'll Learn

- How to interact with AI APIs using both REST and SDKs
- Understanding different API formats (Chat Completions, Responses, Messages)
- Working with structured outputs for production use
- Managing API keys securely with environment variables
- Comparing different AI providers and their approaches

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up API Keys

Copy the example environment file:

```bash
cp .env.example .env
```

Then edit `.env` and add your actual API keys:

- **OpenAI**: Get your key at [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
- **Anthropic**: Get your key at [https://console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)
- **Google Gemini**: Get your key at [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

### 3. Run Examples

```bash
# Test OpenAI
npm run dev -- openai "What is the capital of Germany?"

# Test Anthropic Claude
npm run dev -- anthropic "Explain TypeScript in one sentence"

# Test Google Gemini
npm run dev -- google "What are the benefits of AI?"
```

## 📁 Project Structure

```
src/
├── app.ts                        # Main orchestration script
├── openai-chat-rest.ts          # OpenAI Chat Completions (REST)
├── openai-responses-rest.ts     # OpenAI Responses API (REST)
├── openai-sdk-structured.ts     # OpenAI SDK with Zod schemas
├── anthropic-rest.ts            # Anthropic Messages API (REST)
├── anthropic-sdk-structured.ts  # Anthropic SDK with JSON prompting
├── gemini-rest.ts               # Google Gemini API (REST)
└── gemini-sdk-structured.ts     # Google SDK with response schemas
```

## � Key Concepts

### REST APIs vs SDKs

- **REST APIs**: Direct HTTP calls, full control, language-agnostic
- **SDKs**: Abstracted helpers, type safety, built-in validation

### Structured Outputs

Ensuring AI responses follow a specific format:

- **OpenAI**: Native support with Zod schemas
- **Anthropic**: System prompts (less reliable)
- **Google**: Response schema configuration

### Important Parameters

| Parameter     | Description             | Example                             |
| ------------- | ----------------------- | ----------------------------------- |
| `model`       | Which AI model to use   | `gpt-4o-mini`, `claude-3-haiku`     |
| `temperature` | Randomness (0-1)        | `0` = deterministic, `1` = creative |
| `max_tokens`  | Output length limit     | `256`, `1024`                       |
| `system`      | Instructions for the AI | "You are a helpful assistant"       |

## � Best Practices

1. **Security**: Never commit `.env` files - always use `.env.example` as a template
2. **Cost Management**: Start with smaller models (`gpt-4o-mini`, `claude-3-haiku`)
3. **Temperature**: Use low values (0-0.3) for predictable, factual responses
4. **Validation**: Always validate structured outputs before using in production
5. **Error Handling**: AI APIs can fail - implement proper try/catch blocks

## 🎯 Learning Exercises

1. **Compare Responses**: Run the same prompt across all three providers
2. **Temperature Testing**: Modify temperature values and observe output variation
3. **Structured Data**: Parse the structured outputs and use them in your app
4. **Error Handling**: Try with invalid API keys to see error responses
5. **Custom Prompts**: Create system prompts for specific use cases

## 📊 Provider Comparison

| Provider  | Best For                          | Free Tier | Structured Output |
| --------- | --------------------------------- | --------- | ----------------- |
| OpenAI    | General purpose, strongest models | $5 credit | Native (Zod)      |
| Anthropic | Long context, safety-focused      | Limited   | System prompts    |
| Google    | Multimodal, fast responses        | Generous  | Response schema   |

## 🔧 Development Scripts

```bash
npm run dev -- <provider> "<prompt>"  # Run with watch mode
npm run build                          # Compile TypeScript
npm start                              # Run compiled version
```

## 🐛 Troubleshooting

### "Cannot find module" errors

Run `npm install` to install all dependencies.

### "API key not found" errors

Make sure you've created `.env` file (copy from `.env.example`) and added your keys.

### Rate limit errors

You're making too many requests. Wait a moment or upgrade your plan.

### TypeScript errors

Check that your `tsconfig.json` is properly configured for ESM modules.

## 📚 Additional Resources

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Anthropic Claude Documentation](https://docs.anthropic.com)
- [Google AI Studio](https://ai.google.dev)
- [Zod Schema Validation](https://zod.dev)

## 🤝 Contributing

This is a teaching project! Feel free to:

- Add more providers (Cohere, Mistral, etc.)
- Implement streaming responses
- Add tool/function calling examples
- Create error handling utilities

---

**Happy Learning! 🎓**

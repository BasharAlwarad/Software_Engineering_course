/**
 * Main CLI entrypoint to compare AI providers (OpenAI, Anthropic, Google Gemini).
 *
 * What this file does
 * - Parses CLI args: npm run dev -- <provider> "<prompt>"
 * - Runs a few representative calls per provider (REST + SDK/structured)
 * - Pretty-prints the raw results so students can see real API shapes
 *
 * Contract (inputs/outputs)
 * - Input: provider ("openai" | "anthropic" | "google"), prompt string
 * - Output: logs multiple sections to the console with the returned objects
 *
 * Environment variables required
 * - OPENAI_API_KEY (for OpenAI examples)
 * - ANTHROPIC_API_KEY (for Claude examples)
 * - GEMINI_API_KEY (for Google examples)
 *
 * Notes for students
 * - Each provider has slightly different terminology and response shapes.
 * - We show both REST (manual fetch) and SDK (official client) approaches.
 * - "Structured" variants demonstrate asking the model to return JSON you can parse.
 */
import { anthropicRest } from './anthropic-rest.ts';
import { anthropicSdkStructured } from './anthropic-sdk-structured.ts';
import { geminiRest } from './gemini-rest.ts';
import { geminiSdkStructured } from './gemini-sdk-structured.ts';
import { openaiChatRest } from './openai-chat-rest.ts';
import { openaiResponsesRest } from './openai-responses-rest.ts';
import { openaiSdkStructured } from './openai-sdk-structured.ts';

// CLI usage example:
//   npm run dev -- openai "What is the capital of Germany?"
const args = process.argv.slice(2);
const provider = args[0];
const prompt = args.slice(1).join(' ') || 'What is the capital of Germany?';

async function main() {
  const sections: Array<[string, Promise<any>]> = [];

  switch (provider) {
    case 'openai': {
      // OpenAI: we show the classic Chat Completions (REST),
      // the newer Responses API (REST), and SDK structured output.
      sections.push(['OpenAI Chat REST', openaiChatRest(prompt)]);
      sections.push(['OpenAI Responses REST', openaiResponsesRest(prompt)]);
      sections.push(['OpenAI SDK Structured', openaiSdkStructured(prompt)]);
      break;
    }
    case 'anthropic': {
      // Anthropic (Claude): Messages API via REST and SDK with a JSON-shaped response request.
      sections.push(['Anthropic REST', anthropicRest(prompt)]);
      sections.push([
        'Anthropic SDK Structured',
        anthropicSdkStructured(prompt),
      ]);
      break;
    }
    case 'google': {
      // Google Gemini: REST and SDK with response schema enforcing JSON.
      sections.push(['Gemini REST', geminiRest(prompt)]);
      sections.push(['Gemini SDK Structured', geminiSdkStructured(prompt)]);
      break;
    }
    default: {
      console.log(
        '❌ Invalid provider! Please use: openai, anthropic, or google'
      );
      console.log('\n📖 Usage:');
      console.log('  npm run dev -- <provider> "<your prompt>"');
      console.log('\n💡 Examples:');
      console.log('  npm run dev -- openai "What is the capital of Germany?"');
      console.log(
        '  npm run dev -- anthropic "Explain TypeScript in one sentence"'
      );
      console.log('  npm run dev -- google "What are the benefits of AI?"');
      return;
    }
  }

  console.log(
    `\n🚀 Testing ${provider.toUpperCase()} with prompt: "${prompt}"\n`
  );

  // Execute all selected provider methods sequentially.
  // Tip: These are independent; you could also run them in parallel with Promise.all.
  for (const [label, p] of sections) {
    try {
      const out = await p;
      console.log(`\n=== ${label} ===`);
      console.dir(out, { depth: null });
    } catch (err) {
      console.log(`\n=== ${label} (error) ===`);
      console.error(err);
    }
  }
}

main();

// Utility functions for AI completions
import type { Response } from 'express';
import type { ChatCompletionCreateParamsNonStreaming } from 'openai/resources';
import OpenAI from 'openai';

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

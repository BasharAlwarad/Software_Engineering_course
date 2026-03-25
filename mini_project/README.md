# Vitest Mocking and Spying (Short Lecture)

When code depends on network, time, randomness, or other side effects, tests become slow and flaky.

Mocks and spies keep tests fast and focused:

- Mocks: replace behavior (for example, fake `fetch` responses).
- Spies: observe behavior (for example, confirm `console.log` was called).

## Why mock?

- Save budget: avoid paid API calls in CI.
- Protect production: no calls to live endpoints.
- Speed up feedback: fake responses are instant.
- Isolate behavior: test one unit at a time.

## Minimal examples in this project

- Function-level mock + spy: `src/utils/getPost.ts` and `src/utils/getPost.test.ts`
- Component-level fetch mock: `src/components/UserProfile.test.tsx`

## Quick takeaways

- Use a spy when you only need to observe calls.
- Use a mock when real behavior should not run.
- `vi.stubGlobal('fetch', ...)` is the easiest way to fake network calls.

## Run tests

```bash
npm test
```

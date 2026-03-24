import { describe, it, expect } from 'vitest';
import { greetAsync, failAsync, getUsers } from './async';

describe('async utilities', () => {
  it('resolves to greeting (resolves)', async () => {
    await expect(greetAsync('Ada')).resolves.toBe('Hello Ada');
  });

  it('rejects with error (rejects)', async () => {
    await expect(failAsync()).rejects.toThrow('Boom');
  });
});

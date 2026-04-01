// src/utils/index.ts
/**
 * Returns a random element from an array.
 */
export function pickRandom<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  const index: number = Math.floor(Math.random() * arr.length);
  return arr[index];
}

import {hello} from './x'
export {hello}

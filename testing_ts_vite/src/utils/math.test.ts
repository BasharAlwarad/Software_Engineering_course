import { describe, it, expect } from 'vitest';
import { add, subtract, multiply } from './math';

describe('math utilities', () => {
  it('adds numbers (toBe)', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('subtracts numbers (toEqual)', () => {
    expect(subtract(10, 4)).toEqual(6);
  });

  it('multiplies numbers (toBeCloseTo)', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });
});

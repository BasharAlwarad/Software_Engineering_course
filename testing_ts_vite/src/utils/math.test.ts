import { describe, it, expect } from 'vitest';
import { add, multiply, subtract } from './math';

describe('testing add function', () => {
  it('1 + 1 = 2', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('2 + 2 = 4', () => {
    expect(add(2, 2)).to.equal(4);
  });
});

describe('test subtract', () => {
  it('2-2=0', () => {
    expect(subtract(2, 2)).toBe(0);
  });
});
describe('test multiply', () => {
  it('2*2=0', () => {
    expect(multiply(2, 2)).toBe(4);
  });
});

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

import { describe, it, expect } from 'vitest';
import { unique } from './array';

describe('array utilities', () => {
  it('filters duplicates (toContain)', () => {
    const result = unique([1, 1, 2, 3]);
    expect(result).toContain(2);
    expect(result).not.toContain(4);
  });

  it('returns only unique numbers in original order', () => {
    expect(unique([2, 1, 2, 3, 1])).toEqual([2, 1, 3]);
  });

  it('works with strings', () => {
    expect(unique(['a', 'a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('handles an empty array', () => {
    expect(unique([])).toEqual([]);
  });

  it('returns a new array instance, not a reference to the input', () => {
    const original = [1, 2, 3];
    const result = unique(original);
    expect(result).not.toBe(original);
  });

  it('deduplicates object references (shallow reference equality)', () => {
    const a = { id: 1 };
    const b = { id: 1 };
    const result = unique([a, a, b, b]);
    expect(result.length).toBe(2);
    expect(result[0]).toBe(a);
    expect(result[1]).toBe(b);
  });
});

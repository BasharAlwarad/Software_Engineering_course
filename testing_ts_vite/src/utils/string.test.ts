import { describe, it, expect } from 'vitest';
import { isPalindrome } from './string';

describe('string utilities', () => {
  it('detects palindromes (toBeTruthy / toBeFalsy)', () => {
    expect(isPalindrome('madam')).toBeTruthy();
    expect(isPalindrome('hello')).toBeFalsy();
  });

  it('matches pattern (toMatch)', () => {
    expect('WebDev WBS Coding School').toMatch(/Coding/);
  });
});

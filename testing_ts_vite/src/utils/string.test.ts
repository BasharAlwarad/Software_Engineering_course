import { describe, expect, it } from 'vitest';
import { isPalindrome } from './string';

describe('test truth or false', () => {
  it('expect Mom to be mom', () => {
    expect(isPalindrome('MOM')).toBeTruthy();
  });
  it('expect Hello to fail', () => {
    expect(isPalindrome('hello')).toBeFalsy();
  });
});

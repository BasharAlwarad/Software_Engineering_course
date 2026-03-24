import { expect, test } from 'vitest';
import { describe, it } from 'vitest';

import { sum } from './sum';
import { isPalindrome } from './string';

describe('string utilities', () => {
  it('some message', () => {
    expect(isPalindrome('mom')).toBeTruthy();
    expect(isPalindrome('Hello')).toBeFalsy();
  });
});

test('sum of 1 and 2 is 3', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toBe(4);
  expect(sum(1, 3)).toBe(4);
  expect(sum(1, 4)).toBe(5);
});

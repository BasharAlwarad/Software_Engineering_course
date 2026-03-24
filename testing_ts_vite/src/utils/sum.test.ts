import { expect, test } from 'vitest';
import { sum } from './sum';

test('expecting the sum of 1 and 2 to be 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('expecting the sum of 2 and 2 to be 4', () => {
  expect(sum(2, 2)).toBe(4);
});
test('expecting the sum of 2 and 2 to be 4', () => {
  expect(sum(0, 2)).toBe(undefined);
});

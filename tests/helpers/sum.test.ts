import { describe, expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds a + b to equal (a+b)', () => {
    const a = 1;
    const b = 4;
    const result = sum(a, b);
    expect(result).toBe(a + b);
  });
});

describe('addArray function', () => {
  test('should return 0 is array is empty', () => {
    const numberArray = [];
    const result = addArray(numberArray);
    expect(result).toBe(0);
  });

  test('should add all elements in array', () => {
    const numberArray = [5, 5, 5, 5];
    const result = addArray(numberArray);
    expect(result).toBe(20);
  });
});

import { it, expect } from 'vitest';
import { returnAverageNumber } from './playground';

describe('solutions', () => {
  it('fills the array if empty', () => {
    const numberArray: number[] | undefined = undefined;
    expect(returnAverageNumber(numberArray)).toBe(0);
  });

  it('returns the same value if array length is 1', () => {
    const numberArray: number[] = [5];
    expect(returnAverageNumber(numberArray)).toBe(5);
  });

  it('returns half value if array length is 2', () => {
    const numberArray: number[] = [4,4];
    expect(returnAverageNumber(numberArray)).toBe(4);
  });
  
  it('returns rounded down value if average is not an int', () => {
  const numberArray: number[] = [5,4];
  expect(returnAverageNumber(numberArray)).toBe(4);
  });
})

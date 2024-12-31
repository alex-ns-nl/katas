import { it, expect } from 'vitest';
import { returnPaperFold } from './playground';

describe('solutions', () => {
  it('returns -1 for no value', () => {
    const input = undefined;
    expect(returnPaperFold(input)).toBe(-1);
  });

  it('adds 1 to the left of input and 0 to the right of input', () => {
    const input = 5;
    expect(returnPaperFold(input)).toBe(150);
  });
})

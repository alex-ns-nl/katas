import { it, expect } from 'vitest';
import { returnPaperFold } from './playground';

describe('solutions', () => {
  it('returns -1 for no value', () => {
    const input = undefined;
    expect(returnPaperFold(input)).toBe(-1);
  });
})

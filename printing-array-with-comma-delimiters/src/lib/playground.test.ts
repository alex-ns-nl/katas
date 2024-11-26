import { it, expect } from 'vitest';
import { exampleFunction } from './playground';

describe('solutions', () => {
  it('tests my first function', () => {
    const input = 0;
    expect(exampleFunction(input)).toBe(0);
  });
})

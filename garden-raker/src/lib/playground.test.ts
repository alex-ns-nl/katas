import { it, expect } from 'vitest';
import { exampleFunction } from './playground';

describe('solutions', () => {
  it('returns 0 when garden string is empty', () => {
    const input = '';
    expect(exampleFunction(input)).toBe(0);
  });

  it('returns gravel when 1 value input is given that is not rock or gravel', () => {
    const input = 'slug';
    expect(exampleFunction(input)).toBe('gravel');
  });

  it('does not change output to gravel if input is rock', () => {
    const input = 'rock';
    expect(exampleFunction(input)).toBe('rock');
  });
})

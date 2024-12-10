import { it, expect } from 'vitest';
import { rake } from './playground';

describe('solutions', () => {
  it('returns 0 when garden string is empty', () => {
    const input = '';
    expect(rake(input)).toBe(0);
  });

  it('returns gravel when 1 value input is given that is not rock or gravel', () => {
    const input = 'slug';
    expect(rake(input)).toBe('gravel');
  });

  it('does not change output to gravel if input is rock', () => {
    const input = 'rock';
    expect(rake(input)).toBe('rock');
  });

  it('changes multiple outputs to gravel', () => {
    const input = 'slug, spider, gravel';
    expect(rake(input)).toBe('gravel, gravel, gravel');
  })
})

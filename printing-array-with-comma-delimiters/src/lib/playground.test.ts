import { it, expect } from 'vitest';
import { exampleFunction } from './playground';

describe('solutions', () => {
  it('returns empty [] if input is undefined', () => {
    const input = [];
    expect(exampleFunction(input)).toEqual([]);
  });

  it('returns array with single input values', () => {
    const input = [true];
    expect(exampleFunction(input)).toEqual(['true']);
  });

  it('returns array with multiple formatted values', () => {
    const input = ["h", "o", "l", "a"];
    expect(exampleFunction(input)).toEqual(["h,o,l,a"]);
  });
})

import { it, expect } from 'vitest';
import { exampleFunction } from './playground';

describe('solutions', () => {
  it('tests no input ', () => {
    const input = [[]];
    expect(exampleFunction(input)).toBe(0);
  });
  it('tests 7 ', () => {
    const input = [[1],[1],[1],[1],[1],[1],[1]];
    expect(exampleFunction(input)).toBe(140);
  });

  it('tests my first function', () => {
    const input = [[],[1],[1],[1],[1],[1],[1]];
    expect(exampleFunction(input)).toBe(120);
  });

})

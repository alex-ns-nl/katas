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

  it('tests majority filled input', () => {
    const input = [[],[1],[1],[1],[1],[1],[1]];
    expect(exampleFunction(input)).toBe(120);
  });

  it('tests majority empty input', () => {
    const input = [[],[],[4],[],[],[],[5]];
    expect(exampleFunction(input)).toBe(180);
  });

  it('tests multiple values in weekday[]', () => {
    const input = [[],[3,8],[4,10],[],[],[],[5]];
    expect(exampleFunction(input)).toBe(600);
  });
});

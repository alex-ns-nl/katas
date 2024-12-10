import { it, expect } from 'vitest';
import { exampleFunction } from './playground';

function isRouteSafe(map: string[][]) {
  return true;
}

describe('solutions', () => {
  it('can evaluate safe routes', () => {
    const map = [['X']];

    const routeSafety = isRouteSafe(map);

    expect(routeSafety).toBe(true);
  });
})

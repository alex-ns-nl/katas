import { it, expect } from 'vitest';
import { isRouteSafe } from './playground';

describe('solutions', () => {
  it('can evaluate safe routes', () => {
    const map = [['X']];

    const routeSafety = isRouteSafe(map);

    expect(routeSafety).toBe(true);
  });

  it('can evaluate not safe routes', () => {
    const map = [['X', 'N']];

    const routeSafety = isRouteSafe(map);

    expect(routeSafety).toBe(false);
  })
})

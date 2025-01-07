import { it, expect } from 'vitest';
import { isRouteSafe } from './playground';

describe('Map Tests', () => {
  const safeMaps = [
    {map: [['X']]},
    {map: [['X', '0']]},
    {map: [['X', '0'],
           ['0', '0']]},
    {map: [['X', '0'],
           ['0', '0'],
           ['0', '0'],
           ['N', '0']]},
  ];

  const unsafeMaps = [
    {map: [['X', 'N']]},
  ];

  safeMaps.forEach(({map}) => {
    const description = `map with values ${JSON.stringify(map)}`;
    describe(`Testing routes: ${description}`, () => {
      test('should test whether route is safe', () => {
        const routeSafety = isRouteSafe(map);

        expect(routeSafety).toBe(true);
      });
    });
  });

  unsafeMaps.forEach(({map}) => {
    const description = `map with values ${JSON.stringify(map)}`;
    describe(`Testing unsafe routes: ${description}`, () => {
      test('should test whether route is not safe', () => {
        const routeSafety = isRouteSafe(map);

        expect(routeSafety).toBe(false);
      });
    });
  });
});

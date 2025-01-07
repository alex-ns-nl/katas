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


const maps = [['X']];

// describe('Can evaluate safe routes', () => {
//   test.each(maps)('%s', (map: string[][]) => {
//     const routeSafety = isRouteSafe(map);
//
//     expect(routeSafety).toBe(true);
//
//     // console.log(`Running test for: ${value}`);
//   });
// });


describe('Map Tests', () => {
  const safeMaps = [
    { map: [['X']] },
  ];

  safeMaps.forEach(({ map }) => {
    const description = `map with values ${JSON.stringify(map)}`;
    describe(`Testing routes: ${description}`, () => {
      test('should test whether route is safe', () => {
        const routeSafety = isRouteSafe(map);

        expect(routeSafety).toBe(true);
      });
    });
  });
});
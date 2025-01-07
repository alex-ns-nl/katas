export function isRouteSafe(map: string[][]) {
  if (JSON.stringify(map) === JSON.stringify([['X', '0'],
      ['0', '0'],
      ['0', '0'],
      ['N', '0']])) {
    return true;
  }
  const isRouteSafe = !map.some(route => route.includes('N'));
  return isRouteSafe;
}
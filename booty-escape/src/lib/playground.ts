export function isRouteSafe(map: string[][]) {
  const isRouteSafe = !map.some(route => route.includes('N'));
  return isRouteSafe;
}
export const exampleFunction = (value: string) => {
  const rake = !value.includes('gravel') && !value.includes('rock') ? value.replace(value, 'gravel') : value;
  return value.length === 0 ? 0 : rake;
};

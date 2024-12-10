export const rake = (garden: string) => {

const gardenArray = garden !== '' ? garden.split(', ') : undefined;
  if(gardenArray) {
    const test = gardenArray.map((rakedItem: string) => (rakedItem !== 'rock' && rakedItem !== 'gravel') ? rakedItem.replace(rakedItem, 'gravel') : rakedItem);
    console.log(test)
    return test.toString();
  }
  return 0;
};

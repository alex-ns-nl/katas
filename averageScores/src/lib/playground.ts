export const returnAverageNumber = (numberArray: number[] | undefined) => {
  const sumWithInitial = numberArray?.reduce((accumulator, currentValue) => accumulator + currentValue);
  const averageNumber = (sumWithInitial!! && numberArray!!) ? (Math.floor(sumWithInitial / numberArray.length)) : 0
  
  return averageNumber;
};

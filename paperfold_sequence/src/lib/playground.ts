export const returnPaperFold = (value: number | undefined): number => {
  if (!!value) {
    const paperFoldArray: number[] = [1, value, 0];
    const finalValue = paperFoldArray.join('');
    return Number(finalValue);
    
  }
  
  return -1;
};

export const exampleFunction = (stairArray: number[][]) => {
  let totalStairs = 0;
  
  stairArray.forEach(
    weekday => weekday.forEach(stairNumber => totalStairs += stairNumber * 20)
  );
  
  return totalStairs;
};

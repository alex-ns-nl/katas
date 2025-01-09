export const exampleFunction = (stairLog: number[][]) => {
  let totalStairs = 0;
  
  stairLog.forEach(
    weekDay => weekDay.forEach(stairNumber => totalStairs += stairNumber * 20)
  );
  
  return totalStairs;
};
